
import React, { createContext, useContext, useMemo, useState } from 'react'

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();


export default function ThemeProvider({ children }) {

    const [isDark, setDark] = useState(false);

    const toggleDark = () => {
        setDark((prev) => !prev);
    };

    const myTheme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',

        },
    });

    const myValue = useMemo(() => {
        return { isDark, toggleDark };
    }, [isDark]);

    return (


        <MuiThemeProvider theme={myTheme}>
            <ThemeContext.Provider value={myValue}>{children}</ThemeContext.Provider>
        </MuiThemeProvider>

    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeContext.Provider");
    return context;
}

