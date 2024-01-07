// src/layout/header/topNavBar/AppBarr.jsx
import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import LeftNavigation from 'layout/header/topNavBar/leftNavBar/LeftNavigation';
import RightNavigation from 'layout/header/topNavBar/rightNavBar/RightNavigation';
import { MenuProvider } from 'layout/header/topNavBar/menu/MenuProvider';


export default function AppBarr() {
    return (
        <MenuProvider>
            <AppBar position="sticky" color="primary" elevation={10}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <LeftNavigation />
                    <RightNavigation />
                </Toolbar>
            </AppBar>
        </MenuProvider>
    );
}