import React, { Component } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import Nav from './components/nav';
// import SimpleMenu from './components/menu';
import Grid from '@material-ui/core/Grid';
// import MediaCard from './components/card';
// import GridList from './components/gridlist';
import AppBar from './components/appbar';
import Typography from '@material-ui/core/typography';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper'; 
import Popper from './components/popper';
import Table from './components/table';
// import PinGrid from './components/pinterestgrid';
// import GridListTile from '@material-ui/core/GridListTile';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import 'typeface-roboto';

// photos
import MonaLisa from './static/monalisa.jpg';
import Dance from './static/dance.jpg';
import Sunflowers from './static/sunflowers.jpg';
import Coin from './static/coin.png';
import Favicon from './static/coin.png';
import MenuIcon from './static/coin.png';

import * as serverfuncs from './serverfuncs';

const tileData = [
  {
    img: MonaLisa,
    title: "Mona Lisa",
    artist: 'DaVinci',
    description: "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
  },
  {
    img: Dance,
    title: "Dance",
    artist: 'Matisse',
    description: "Dance is a painting made by Henri Matisse in 1910, at the request of Russian businessman and art collector Sergei Shchukin, who bequeathed the large decorative panel to the Hermitage Museum in Saint Petersburg, Russia.",
  },
  {
    img: Sunflowers,
    title: "Sunflowers",
    artist: 'Van Gogh',
    description: "Sunflowers is the name of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, executed a year later in Arles, shows a bouquet of sunflowers in a vase. ",
  },
];




class Home extends Component  {

  constructor(props){
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return(
      <div>
        <div>
        <p></p>username:<input type = 'text' id = 'username'></input>
        <p></p>password:<input type = 'text' id = 'password'></input>
        <p></p>name:<input type = 'text' id = 'name'></input>
        <p></p>admin:<input type = 'checkbox' id = 'admin'></input>
        <p></p>guilders:<input type = 'number' id = 'guilders'></input>
        <p></p>micro:<input type = 'number' id = 'micropoints'></input>
        <p></p>paintings:<input type = 'text' id = 'paintings'></input>
        </div>
        <button onClick = {serverfuncs.createUser}>CREATE ACCOUNT</button>
        <button onClick = {serverfuncs.logInUser}>LOG IN</button>
        <button onClick = {serverfuncs.logOutUser}>LOG OUT</button>
        <p id = 'mytext'>NULL</p>
        <div>
          <button onClick = {serverfuncs.createArtPost}>CREATE ART POST</button>
        </div>
        <div>
          <p></p>title:<input type = 'text' id = 'title'></input>
          <p></p>artist:<input type = 'text' id = 'artist'></input>
          <p></p>year:<input type = 'text' id = 'year'></input>
          <p></p>theoretical:<input type = 'number' id = 'theoretical'></input>
          <p></p>actual:<input type = 'number' id = 'actual'></input>
          <p></p>hidden:<input type = 'checkbox' id = 'hidden'></input>
          <p></p>owner:<input type = 'text' id = 'owner'></input>
          <p></p>url:<input type = 'text' id = 'url'></input>
        </div>
        <AppBar />
        {/* <PinGrid /> */}
        {/* <GridList /> */}
        <Typography fontFamily="roboto" variant="h4" component="h4" style={{ 
          textAlign: 'center',
          paddingTop: 20,
          paddingBottom: 10}}>My Gallery</Typography>
        <div>
          <Grid
          container
          direction="row"
          justify="center"
          alignItems="left-justified"
          >
            {tileData.map(tile => (
              <div style={{padding: 10}}>
                
                <img src={tile.img} alt={tile.title} height={500} onClick={this.togglePopup.bind(this)}/>
                <Paper style={{ padding: 10 }}>
                  <Typography variant="h6" fontFamily="roboto">{tile.title}</Typography>
                  <Typography variant="subtitle1" fontFamily="roboto">By: {tile.artist}</Typography>
                <div style={{paddingTop: 5, position: 'relative', alignSelf: 'right', justifyContent: 'flex-end'}}>
                  <Popper text={tile.description} />
                </div>
                </Paper>
                {/* <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.artist}</span>}
                /> */}
              </div>
            ))}  
              {/* <div style={{padding: 10}}><img src="./static/monalisa.jpg" height={500}/>
              </div>
              <div style={{padding: 10}}><img src="./static/dance.jpg" height={500} /></div>
              <div style={{padding: 10}}><img src="./static/sunflowers.jpg" height={500}/></div> */}
          </Grid>
        </div>
        <Table />
      </div>
      
    )
  }
}

export default Home