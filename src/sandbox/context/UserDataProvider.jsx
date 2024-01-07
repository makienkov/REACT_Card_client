import { Box } from '@mui/material';
import React, { createContext, useContext, useState } from 'react'

const userDataContext = createContext();


export default function UserDataProvider({ children }) {

    const [showBox, setShowBox] = useState(false);
    const toggleBox = () => {
        setShowBox((prev)=>!prev);
    };

    return (

        <>
           {showBox && (<Box sx={{backgroundColor: "red", width: 50, height: 50}}></Box>)}
            <userDataContext.Provider value={toggleBox}>{children}</userDataContext.Provider>
        </>

    )
}

export const useUserData = () => {
    const context = useContext(userDataContext);
    if (!context) throw new Error("useUserData must be used within userDataContext.Provider");
    return context;
}
