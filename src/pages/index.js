import React from "react";
import ReactDOM from "react-dom";
import Homepage from "../components/homepage";
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
          <MenuItem onClick={handleClose}><Link to="/table" style={{color: "#000000", textDecoration: "none"}}>Table</Link></MenuItem>
          {/* <MenuItem onClick={handleClose}><Link to="/login" style={{color: "#000000", textDecoration: "none"}}>Log In</Link></MenuItem> */}
          <MenuItem onClick={() => (serverfuncs.logOutUser())}><Link to="/login" style={{color: "#000000", textDecoration: "none"}}>Log Out</Link></MenuItem>
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
                            Fantasy Collecting
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Homepage />
            </div>
        )
    
}

export default MainPage