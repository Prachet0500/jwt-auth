import React from 'react';
import './styles.css';
import {AppBar, Tab, Tabs, MenuItem, IconButton, Menu, Toolbar} from "@material-ui/core";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';


export const AppHeader = ({tabValue}) => {
    const tabs = ["/books", "/favorite", "/book", "/users"];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    let history = useHistory();

    const handleClick = (event, newValue) => {
        history.push(tabs[newValue])
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        fetch("/logout")
            .then(res => history.push("/login"));
        setAnchorEl(null);
    };

    return <div style={{flexGrow: 1}}>
        <Router>
            <AppBar position="fixed">
                <Toolbar>
                    <Tabs value={tabValue} onChange={handleClick} style={{paddingRight: "40vw"}}>
                        <Tab label="Books"/>
                        <Tab label="Favorite"/>
                        <Tab label="Add Book"/>
                        <Tab label="Users"/>
                    </Tabs>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Router>
    </div>
};