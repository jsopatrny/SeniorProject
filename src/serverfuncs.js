import * as tradeFuncs from './components/tradewindow.js';
import React from 'react';
import {MD5} from './md5';
import {conductTrade} from './tradefuncs';
export const apiURL = "http://fantasycollecting.hamilton.edu/api";

/* eslint-disable require-jsdoc */
export {updateArtwork, deleteArtwork, getArtworkInfo,
  logBackInUser, logOutUser, getAllUsers, createUser, getAllArtworks,
  createArtwork, checkForTrade, updateUserData, deleteUser,
  initiateTrade, acceptTrade, declineTrade, cancelTrade,
  setTradeUser, setTradeID, addGuildersToTrade, addArtworkToTrade,
  removeItemsFromTrade, finalizeAsBuyer, finalizeAsSeller, sendFormToAdmin,
  isAdmin};
/*


  coroutine functions


*/

function coroutine(f) {
  const o = f();
  o.next();
  return function(x) {
    o.next(x);
  };
}

/*


  trading functions


*/

var RESPONSE_INTERVAL_REF;
var ITEM_INTERVAL_REF;
var FINALIZE_INTERVAL_REF;
var CURRENT_TRADE_ID;
var CURRENT_TRADE_USER;

const tradeCheck = coroutine(function* () {
  while (true) {
    yield;
    checkForTrade();
  }
});

setInterval(tradeCheck, 2000);

const itemCheck = coroutine(function* () {
  while (true) {
    yield;
    updateItems();
  }
});

const finalizeCheck = coroutine(function* () {
  while (true) {
    yield;
    checkForFinalize();
  }
});

const responseCheck = coroutine(function* () {
  while (true) {
    yield;
    checkForResponse();
  }
});

async function checkForFinalize() {
  const response = await fetch(apiURL + '/trades/' + CURRENT_TRADE_ID);
  const myJson = await response.json();
  const trade = JSON.parse(JSON.stringify(myJson))['0'];
  if (typeof trade === 'undefined') {
    clearIntervals();
    tradeFuncs.closeTrade();
    return;
  }
  if(trade.sellerapproved === 1 && trade.buyerapproved === 1) {
    clearInterval(FINALIZE_INTERVAL_REF);
    clearInterval(ITEM_INTERVAL_REF);
    tradeFuncs.closeTrade();
    if(trade.buyer == localStorage.getItem('username')) {
      sendFormToAdmin();
    }
  }
}

async function updateItems() {
  var still_active = await fetch(apiURL + '/trades/' + CURRENT_TRADE_ID);
  still_active = await still_active.json();
  still_active = JSON.parse(JSON.stringify(still_active))['0'];
  if(typeof still_active === 'undefined') {
    console.log("TRADE CANELLED");
    clearInterval(ITEM_INTERVAL_REF);
    tradeFuncs.closeTrade();
    clearIntervals();
    return;
  }
  const items = await fetch(apiURL + '/tradedetails/' + CURRENT_TRADE_ID);
  const items_json = await items.json();
  const final_items = JSON.parse(JSON.stringify(items_json));
  tradeFuncs.populateUserTradeFields(final_items);
}

function addArtworkToTrade(artwork) {
  fetch(apiURL + '/tradedetails', {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {tradeid: CURRENT_TRADE_ID,
        buyer: CURRENT_TRADE_USER,
        seller: localStorage.getItem('username'),
        offer: artwork,
        approved: 0})
  }).then(function (res) {
    console.log(res);
  })
}

function removeItemsFromTrade() {
  fetch(apiURL + '/tradedetails/'+CURRENT_TRADE_ID, {
    method: 'delete',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
  }).then(function (res) {
    console.log(res);
  })
}

async function userHasEnough(name, guilders) {
  var info = await fetch(apiURL + '/users/'+name);
  info = await info.json();
  info = JSON.parse(JSON.stringify(info))['0'];
  console.log(info);
  return parseInt(info.guilders) >= parseInt(guilders);
}

async function addGuildersToTrade(guilders) {
  if(!(await userHasEnough(localStorage.getItem("username"), guilders))){
    return;
  }
  document.getElementById("addguilders").value = "";
  fetch(apiURL + '/tradedetails/', {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {tradeid: CURRENT_TRADE_ID,
        buyer: CURRENT_TRADE_USER,
        seller: localStorage.getItem('username'),
        offer: guilders,
        approved: false})
  }).then(function (res) {
    console.log(res);
  })
}

/*


  buyer functions


*/

async function initiateTrade(user) {
  if(user == localStorage.getItem('username')) {
    console.log('cannot trade with self');
    return;
  }
  const response = await fetch(apiURL +'/users/'+user);
  const myJson = await response.json();
  const exists = JSON.parse(JSON.stringify(myJson))['0'];
  if(typeof exists === 'undefined') {
    console.log('user does not exist');
    return;
  }
  const tid = Date.now();
  CURRENT_TRADE_ID = tid;
  console.log(CURRENT_TRADE_ID);
  fetch(apiURL + '/trades', {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {tradeid: tid,
        seller: user,
        buyer: localStorage.getItem('username'),
        buyerinit: true,
        sellerinit: false,
        buyerapproved: false,
        sellerapproved: false})
  }).then(function (res) {
    console.log("trade requested sent to "+user);
    RESPONSE_INTERVAL_REF = setInterval(responseCheck, 2000);
  })
}

function setTradeUser(user) {
  CURRENT_TRADE_USER = user;
}

function setTradeID(id) {
  CURRENT_TRADE_ID = id;
}

async function checkForResponse() {
  const response = await fetch(apiURL + '/trades/' + CURRENT_TRADE_ID);
  const myJson = await response.json();
  const trade = JSON.parse(JSON.stringify(myJson))['0'];
  if (typeof trade === 'undefined') {
    console.log("TRADE WAS CANCELLED");
    clearInterval(RESPONSE_INTERVAL_REF);
    document.getElementById("ldsanim").style.display = "none";
    document.getElementById("maininit").innerHTML = "trade";
    return;
  }
  if(trade.sellerinit == true) {
    CURRENT_TRADE_USER = trade.seller;
    tradeFuncs.openTrade(false, CURRENT_TRADE_USER);
    clearInterval(RESPONSE_INTERVAL_REF);
    ITEM_INTERVAL_REF = setInterval(itemCheck, 1000);
  }
}

function finalizeAsBuyer(check) {
  console.log("setting approval");
  console.log(check);
  fetch(apiURL + '/trades/'+CURRENT_TRADE_ID, {
    method: 'put',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {buyerapproved: check})
  }).then(function (res) {
    console.log(res);
    if(check) {
      FINALIZE_INTERVAL_REF = setInterval(finalizeCheck, 1000);
    }
    else {
      clearInterval(FINALIZE_INTERVAL_REF);
    }
  })
}

async function sendFormToAdmin() {
  fetch(apiURL + '/tradedetails/'+CURRENT_TRADE_ID, {
    method: 'put',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {approved: true})
  }).then(async function (res) {
    //console.log(res);
    var offers = await fetch(apiURL + '/tradedetails/' + CURRENT_TRADE_ID);
    offers = await offers.json();
    offers = JSON.parse(JSON.stringify(offers));
    for(var offer in offers) {
      await conductTrade(offers[offer].buyer, offers[offer].seller, offers[offer].offer);
    }
    cancelTrade();
  }); 
}

/*


  seller functions


*/

async function checkForTrade() {
  if(!window.location.toString().endsWith("/gallery")) return; 
  var theTrades = [];
  const response = await fetch(apiURL + '/trades/');
  const myJson = await response.json();
  for(var trade of myJson) {
    if(trade.seller == localStorage.getItem('username')) {
      theTrades.push(trade);
    }
  }
  if(theTrades.length > 0) {
    document.getElementById("mainalert").style.display = 'block';
    tradeFuncs.addTrades(theTrades);
  }
  else {
    tradeFuncs.addTrades(theTrades);
  }
}

async function acceptTrade(tid) {
  console.log(tid);
  fetch(apiURL + '/trades/'+tid, {
    method: 'put',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {sellerinit: true})
  }).then(function (res) {
    CURRENT_TRADE_ID = tid;
    console.log(res);
    // add trade ui
    ITEM_INTERVAL_REF = setInterval(itemCheck, 1000);
  })
}

async function declineTrade(tid) {
  fetch(apiURL + '/trades/'+tid, {
    method: 'delete',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
  }).then(function (res) {
    console.log(res);
  })
}

function cancelTrade() {
  fetch(apiURL + '/trades/'+CURRENT_TRADE_ID, {
    method: 'delete',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
  }).then(function (res) {
    console.log(res);
  });
  fetch(apiURL + '/tradedetails/'+CURRENT_TRADE_ID, {
    method: 'delete',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
  }).then(function (res) {
    console.log(res);
  });
  clearIntervals();
}

function clearIntervals() {
  clearInterval(FINALIZE_INTERVAL_REF);
  clearInterval(RESPONSE_INTERVAL_REF);
  clearInterval(ITEM_INTERVAL_REF);
}

function finalizeAsSeller(check) {
  fetch(apiURL + '/trades/'+CURRENT_TRADE_ID, {
    method: 'put',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {sellerapproved: check})
  }).then(function (res) {
    console.log(res);
    if(check) {
      FINALIZE_INTERVAL_REF = setInterval(finalizeCheck, 1000);
    }
    else {
      clearInterval(FINALIZE_INTERVAL_REF);
    }
  })
}

/*


            USER MANAGEMENT FUNCS


*/

async function logBackInUser() {
  //let history = useHistory();
  const stringName = localStorage.getItem('username');
  const response = await fetch(apiURL + '/users/' + stringName);
  const myJson = await response.json();
  const student = JSON.parse(JSON.stringify(myJson))['0'];
  if (typeof student === 'undefined') {
    localStorage.clear();
  } else {
    if(student.admin === 1) {
      //history.push("/table");
    } else {
      //history.push('/');
    }
  }
}

function logOutUser() {
  localStorage.clear();
  window.location.reload();
}

/*

            ADMIN STUDENT MANAGEMENT FUNCS

*/

async function isAdmin(user) {
  const response = await fetch(apiURL + '/users');
  const myJson = await response.json();
  const users = JSON.parse(JSON.stringify(myJson));
  for(var u in users) {
    if(users[u].username === user) {
      return (users[u].admin === 1);
      // return users[u].admin;
    }
  }
}

async function getAllUsers() {
  //console.log("getting all users");
  const response = await fetch(apiURL + '/users');
  const myJson = await response.json();
  const students = JSON.parse(JSON.stringify(myJson));
  // console.log("students: ");
  // console.log(students);
  return students;
}

async function getAllArtworks() {
  const response = await fetch(apiURL + '/artworks');
  const myJson = await response.json();
  const artworks = JSON.parse(JSON.stringify(myJson));
  return artworks;
}

async function updateUserData(data) {
  fetch(apiURL + '/users/'+data.username, {
    method: 'put',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {username: data.username,
        hash: MD5(data.password),
        name: data.name,
        admin: false,
        guilders: data.money,
        microresearchpoints: data.microresearchpoints,
        numofpaintings: data.artworks})
  }).then(function (res) {
    console.log(res);
  })
}

async function createUser(user) {
  //const stringName = localStorage.getItem('username');
  const response = await fetch(apiURL + '/users/' + user.username);
  const myJson = await response.json();
  const student = JSON.parse(JSON.stringify(myJson))['0'];
  if (typeof student === 'undefined') {
    console.log(user);
    fetch(apiURL + '/users/', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {username: user.username,
            hash: MD5(user.password),
            name: user.name,
            admin: false,
            guilders: user.money,
            microresearchpoints: user.microresearchpoints,
            numofpaintings: user.artworks,
          }),
    }).then(function(res) {
      console.log(res);
    })
  } else {
    console.log('User already exists.');
  }
}

function deleteUser(username) {
  fetch(apiURL + '/users/'+username, {
    method: 'delete',
    mode: 'cors',
  }).then(function(res) {
    console.log(res);
  })
}

/*

            ADMIN ARTWORK MANAGEMENT FUNCS

*/

// function testlog() {
//   console.log('binlog test');
// }

// async function updateArtworkData(data) {
//   fetch(apiURL + '/artworks/'+data.identifier, {
//     method: 'put',
//     mode: 'cors',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//         {username: data.identifier,
//         })
//   }).then(function (res) {
//     console.log(res);
//   })
// }

async function createArtwork(artwork) {
  //const stringName = localStorage.getItem('username');
  const response = await fetch(apiURL + '/artworks/' + artwork.identifier);
  const myJson = await response.json();
  const artworkInDB = JSON.parse(JSON.stringify(myJson))['0'];
  if (typeof artworkInDB === 'undefined') {
    console.log(artwork);
    fetch(apiURL + '/artworks/', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {identifier: artwork.identifier,
          title: artwork.title,
          artist: artwork.artist,
          year: artwork.year,
          theoreticalprice: artwork.theoreticalprice,
          actualprice: artwork.actualprice,
          hidden: artwork.hidden,
          owner: artwork.owner,
          url: artwork.url
          }),
    }).then(function(res) {
      console.log(res);
    })
  } else {
    console.log('Artwork already exists.');
  }
}

async function updateArtwork(data) {
  fetch(apiURL + '/artworks/'+data.identifier, {
    method: 'put',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {title: data.title,
        artist: data.artist,
        year: data.year,
        theoreticalprice: data.theoreticalprice,
        actualprice: data.actualprice,
        hidden: data.hidden,
        owner: data.owner,
        url: data.url,})
  }).then(function (res) {
    console.log(res);
  })
}

function deleteArtwork(artwork) {
  fetch(apiURL + '/artworks/'+artwork, {
    method: 'delete',
    mode: 'cors',
  }).then(function(res) {
    console.log(res);
  })
}

/*

            ARTWORK MANAGEMENT FUNCS

*/

async function getArtworkInfo(art) {
  const response = await fetch(apiURL + '/artworks/'+art);
  const myJson = await response.json();
  const artwork = JSON.parse(JSON.stringify(myJson))['0'];
  console.log(artwork);
  return artwork;
}


