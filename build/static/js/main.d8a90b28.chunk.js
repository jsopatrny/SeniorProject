(this.webpackJsonpSeniorProject=this.webpackJsonpSeniorProject||[]).push([[0],{64:function(e,t,n){e.exports=n.p+"static/media/menuIcon.d7a593e9.png"},65:function(e,t,n){e.exports=n.p+"static/media/coin.515325b9.png"},67:function(e,t,n){e.exports=n.p+"static/media/monalisa.c08cd151.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/dance.94d13e19.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/sunflowers.7ebd97b8.jpg"},78:function(e,t,n){e.exports=n(89)},83:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=(n(83),n(41)),c=n(42),s=n(51),u=n(43),m=n(52),d=n(142),p=n(131),h=(n(132),n(133),n(134)),f=n(24),g=n(128);n(71),n(144),n(64);n(65),Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));var b=n(91),E=n(135),y=n(136),v=Object(p.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function w(e){var t=v(),n=r.a.useState(null),a=Object(f.a)(n,2),i=a[0],o=a[1],l=Boolean(i),c=l?"simple-popper":void 0;return r.a.createElement("div",null,r.a.createElement(g.a,{"aria-describedby":c,onClick:function(e){o(i?null:e.currentTarget)}},"More Info"),r.a.createElement(E.a,{id:c,open:l,anchorEl:i,transition:!0},(function(n){var a=n.TransitionProps;return r.a.createElement(y.a,Object.assign({},a,{timeout:350}),r.a.createElement(b.a,{style:{width:700}},r.a.createElement(h.a,{className:t.typography},e.text)))})))}var x=n(137),j=n(141),O=n(140),k=n(138),S=n(143),B=n(139),I=n(145),N=n(19),P=n(10),C=n.n(P);var M=!1;!function(e){var t=e();t.next()}(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=3);case 3:W(),M&&console.log("trade requested"),e.next=0;break;case 7:case"end":return e.stop()}}),e)})));function W(){return J.apply(this,arguments)}function J(){return(J=Object(N.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://fantasycollecting.hamilton.edu/api/students/dholley");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,"undefined"!==typeof JSON.parse(JSON.stringify(n))[0]?M=!0:console.log("no trade");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return R.apply(this,arguments)}function R(){return(R=Object(N.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("liusername").value,e.next=3,fetch("http://fantasycollecting.hamilton.edu/api/students/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,"undefined"===typeof(r=JSON.parse(JSON.stringify(a))[0])?console.log("username does not exist"):r.hash!==document.getElementById("lipassword").value?console.log("incorrect password for username"):(console.log("login successful"),localStorage.setItem("username",document.getElementById("liusername").value),1===r.admin?window.location.replace("/table"):window.location.replace("/"));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(N.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("username"),e.next=3,fetch("http://fantasycollecting.hamilton.edu/api/students/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,"undefined"===typeof(r=JSON.parse(JSON.stringify(a))[0])?localStorage.clear():1===r.admin?window.location.replace("/table"):window.location.replace("/");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){localStorage.clear(),window.location.reload()}function q(){return(q=Object(N.a)(C.a.mark((function e(){var t,n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://fantasycollecting.hamilton.edu/api/students");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=JSON.parse(JSON.stringify(n))[0],e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.stringify({username:document.getElementById(t+"name").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,money:document.getElementById(t+"money").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,paintings:document.getElementById(t+"paintings").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,value:document.getElementById(t+"value").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,kudos:document.getElementById(t+"kudos").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value}),console.log(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=[{id:"username",label:"Username",minWidth:170},{id:"name",label:"Name",minWidth:170},{id:"money",label:"Money",minWidth:100},{id:"artworks",label:"Artworks",minWidth:100},{id:"value",label:"Value",minWidth:100},{id:"kudos",label:"Kudos",minWidth:100},{id:"change",minWidth:50}];function F(e,t,n,a,r,i){return{username:e,name:t,paintings:n,money:a,value:r,kudos:i}}var G=Object(p.a)({root:{width:"100%"},tableWrapper:{maxHeight:440,overflow:"auto"}}),H=[],K=function(){return q.apply(this,arguments)}();for(var U in K)H.append(F(U.username,U.name,U.numofpaintings,U.guilders,U.microresearchpoints));function $(){var e=G(),t=r.a.useState(0),n=Object(f.a)(t,2),a=n[0],i=n[1],o=r.a.useState(10),l=Object(f.a)(o,2),c=l[0],s=l[1],u=r.a.useState(H),m=Object(f.a)(u,2),d=m[0],p=m[1];F("","","","","","");return r.a.createElement("div",null,r.a.createElement(b.a,{className:e.root},r.a.createElement("div",{className:e.tableWrapper},r.a.createElement(x.a,{stickyHeader:!0},r.a.createElement(k.a,null,r.a.createElement(B.a,null,D.map((function(e){return r.a.createElement(O.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(j.a,null,H.slice(a*c,a*c+c).map((function(e){return r.a.createElement(B.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.username},D.map((function(t){var n=e[t.id];return r.a.createElement(O.a,{id:e.username+t.id,align:t.align},"change"==t.id?r.a.createElement(g.a,{variant:"contained",onClick:function(){return function(e){return A.apply(this,arguments)}(e.username)}},"Save"):r.a.createElement(I.a,{defaultValue:n,inputProps:{"aria-label":"description"}}))})))})),r.a.createElement(B.a,null,r.a.createElement(g.a,{onClick:function(){p(d.push(F("","","","","",""))),console.log(d)}},"Add Row"))))),r.a.createElement(S.a,{rowsPerPageOptions:[10,25,100],component:"div",count:H.length,rowsPerPage:c,page:a,backIconButtonProps:{"aria-label":"previous page"},nextIconButtonProps:{"aria-label":"next page"},onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){s(+e.target.value),i(0)}})))}var z=n(67),Q=n.n(z),X=n(68),Y=n.n(X),Z=n(69),_=n.n(Z),ee=[{img:Q.a,title:"Mona Lisa",artist:"DaVinci",description:"The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world."},{img:Y.a,title:"Dance",artist:"Matisse",description:"Dance is a painting made by Henri Matisse in 1910, at the request of Russian businessman and art collector Sergei Shchukin, who bequeathed the large decorative panel to the Hermitage Museum in Saint Petersburg, Russia."},{img:_.a,title:"Sunflowers",artist:"Van Gogh",description:"Sunflowers is the name of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, executed a year later in Arles, shows a bouquet of sunflowers in a vase. "}],te=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{fontFamily:"roboto",variant:"h4",component:"h4",style:{textAlign:"center",paddingTop:20,paddingBottom:10}},"My Gallery"),r.a.createElement("div",null,r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"left-justified"},ee.map((function(e){return r.a.createElement("div",{style:{padding:10}},r.a.createElement("img",{src:e.img,alt:e.title,height:500}),r.a.createElement(b.a,{style:{padding:10}},r.a.createElement(h.a,{variant:"h6",fontFamily:"roboto"},e.title),r.a.createElement(h.a,{variant:"subtitle1",fontFamily:"roboto"},"By: ",e.artist),r.a.createElement("div",{style:{paddingTop:5,position:"relative",alignSelf:"right",justifyContent:"flex-end"}},r.a.createElement(w,{text:e.description}))))})))))}}]),t}(a.Component),ne=n(30),ae=n(25),re=function(){return r.a.createElement("div",null,r.a.createElement(ne.b,{to:"/table"},"Table"),r.a.createElement("p",null),r.a.createElement(ne.b,{to:"/login"},"Log In"),r.a.createElement(te,null))},ie=function(){return r.a.createElement("div",null,r.a.createElement($,null))},oe=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Error 404 Page Not Found"))};console.log(window.location),null!==localStorage.getItem("username")&&"/login"==window.location.pathname&&function(){V.apply(this,arguments)}();var le=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),"username:",r.a.createElement("input",{type:"text",id:"liusername"}),r.a.createElement("p",null),"password:",r.a.createElement("input",{type:"text",id:"lipassword"}),r.a.createElement("p",null),r.a.createElement("button",{onClick:T},"log in"),r.a.createElement("p",null),r.a.createElement("button",{onClick:L},"log out"))},ce=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(ne.a,null,r.a.createElement(ae.d,null,r.a.createElement(ae.b,{exact:!0,path:"/",component:re}),r.a.createElement(ae.b,{exact:!0,path:"/table",component:ie}),r.a.createElement(ae.b,{exact:!0,path:"/login",component:le}),r.a.createElement(ae.b,{exact:!0,path:"/404notfound",component:oe}),r.a.createElement(ae.a,{to:"/404notfound"})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.d8a90b28.chunk.js.map