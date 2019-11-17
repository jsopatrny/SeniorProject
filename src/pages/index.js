import React from "react";
import ReactDOM from "react-dom";
import Homepage from "../components/homepage";
import ChatComponent from "../components/ChatMessage";
import Signup from "../components/Signup";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import * as serverfuncs from '../serverfuncs';

function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
          <IconButton edge="start" color="inherit" aria-label="menu"
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {handleClose(); serverfuncs.cancelTrade();}}><Link to="/table" style={{color: "#000000", textDecoration: "none"}}>Table</Link></MenuItem>
          <MenuItem onClick={() => {handleClose(); serverfuncs.cancelTrade();}}><Link to="/auction" style={{color: "#000000", textDecoration: "none"}}>Auction</Link></MenuItem>
          <MenuItem onClick={() => {handleClose(); serverfuncs.cancelTrade();}}><Link to="/arttable" style={{color: "#000000", textDecoration: "none"}}>Artworks</Link></MenuItem>
          {/* <MenuItem onClick={handleClose}><Link to="/login" style={{color: "#000000", textDecoration: "none"}}>Log In</Link></MenuItem> */}
          <MenuItem onClick={() => (serverfuncs.logOutUser())}><Link to="/" style={{color: "#000000", textDecoration: "none"}}>Log Out</Link></MenuItem>
          {/* <MenuItem><ChatComponent /></MenuItem> */}
        </Menu>
      </div>
    );
  }

const MainPage = () => {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        {SimpleMenu()}
                        <Typography variant="h6" color="inherit">
                            Fantasy Collecting -&nbsp;
                        </Typography>
                        <Typography variant="h6" color="inherit">
                          {localStorage.getItem('username')}
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* <Button onClick={() => {console.log(typeof localStorage.getItem('admin'))}}>click</Button> */}
                <Button style={{position: 'fixed'}}><ChatComponent /></Button>
                <Homepage />
            </div>
        )
    
}

export default MainPage