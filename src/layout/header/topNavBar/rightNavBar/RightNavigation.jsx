// src\layout\header\topNavBar\rightNavBar\RightNavigation.jsx
import { Box, IconButton } from '@mui/material'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from 'providers/ThemeProvider';
import { useUser } from 'users/providers/UserProvider';
import Logged from './Logged';
import NotLogged from './NotLogged';
import SearchBar from './SearchBar';
import MoreButton from './MoreButton';

export default function RightNavigation() {

    const { isDark, toggleDark } = useTheme();

    const { user } = useUser();

    function DynamicIcon({ isDarkMode }) {
        if (!isDarkMode) return <DarkModeIcon />;
        return <LightModeIcon />;
    }

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <SearchBar />

                <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
                    <DynamicIcon isDarkMode={isDark} />
                </IconButton>
                {user && <Logged />}
                {!user && <NotLogged />}
            </Box>
            <MoreButton />
        </>
    )
}
