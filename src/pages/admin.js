import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { View } from 'react-native'

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
          <MenuItem onClick={handleClose}><Link to="/admin" style={{color: "#000000", textDecoration: "none"}}>Admin Homepage</Link></MenuItem>
          {/* <MenuItem onClick={() => (serverfuncs.logOutUser())}><Link to="/login" style={{color: "#000000", textDecoration: "none"}}>Log Out</Link></MenuItem> */}
        </Menu>
      </div>
    );
  }

const AdminPage = () => {
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
                <br />
                <Typography variant="h3" color="inherit" align="center">Hello, Professor!</Typography>
                <br />
                <View style={{paddingLeft: '25%', paddingRight: '25%', flexDirection: 'column', justifyContent: 'center'}}>
                    <Button variant="contained" 
                      color="primary"
                      style={{marginTop: 10, marginBottom: 20}}
                      ><Link style={{color: '#ffffff'}} to="/table">Show Users</Link>
                    </Button>
                    <Button variant="contained" 
                      color="primary"
                      style={{marginTop: 10, marginBottom: 20}}
                      ><Link style={{color: '#ffffff'}} to="/arttable">Show Artworks</Link>
                    </Button>
                    <Button variant="contained" 
                      color="primary"
                      style={{marginTop: 10, marginBottom: 20}}
                      ><Link style={{color: '#ffffff'}} to="/arttable">Show Incoming Trades</Link>
                    </Button>
                    <Button variant="contained" 
                      color="primary"
                      style={{marginTop: 10, marginBottom: 20}}><Link style={{color: '#ffffff'}} to="/auction">Create Auction</Link>
                    </Button>
                </View>
            </div>
        )
}

export default AdminPage