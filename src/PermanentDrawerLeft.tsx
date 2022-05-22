import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import P1renderer from './P1renderer'
import P2renderer from './P2renderer'
import P3renderer from './P3renderer'
import P4renderer from './P4renderer'
import MDrouter from './MDrouter';
import WebTerminal from './Terminal';

const drawerWidth = 120;

function PermanentDrawerLeft() {

    return (
        <Box sx={{ display: 'flex' }}>
            <BrowserRouter>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Learn Linux
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                        <ListItem key={'#Linux哲学'} disablePadding>
                            <ListItemButton component={Link} to="/LinkPho">
                                <ListItemText primary={'#Linux哲学'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={'#命令行'} disablePadding>
                            <ListItemButton component={Link} to="/Command">
                                <ListItemText primary={'#命令行'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={'#关于vim'} disablePadding>
                            <ListItemButton component={Link} to="/AboutVim">
                                <ListItemText primary={'#关于vim'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={'#gcc'} disablePadding>
                            <ListItemButton component={Link} to="/gcc">
                                <ListItemText primary={'#gcc'} />
                            </ListItemButton>
                        </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

                <Typography paragraph>
                    <div className='first' style={{
                        width: '50%',
                        float: 'left',
                        border: '1px solid'
                    }}>
                            <Routes>
                                <Route path="/" element={<P1renderer />} />
                                <Route path="/LinkPho" element={<P1renderer />} />
                                <Route path="/Command" element={<P2renderer />} />
                                <Route path="/AboutVim" element={<P3renderer />} />
                                <Route path="/gcc" element={<P4renderer />} />
                            </Routes>
                    </div>
                </Typography>

                <div className='second' style={{
                    width: '49%',
                    float: 'right',
                }}>
                    <div style={{
                        position: 'fixed'
                    }}>
                        <WebTerminal />
                    </div>
                </div>
            </Box>
            </BrowserRouter>
        </Box>
    );
}

export default PermanentDrawerLeft