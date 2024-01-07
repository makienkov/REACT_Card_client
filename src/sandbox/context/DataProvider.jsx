import React, { createContext, useContext } from 'react'

const MyContext = createContext();


export default function DataProvider({ children }) {

    const myData = {
        data1: 100,
        data2: 111,
    };

    return (
        <MyContext.Provider value={myData}>{children}</MyContext.Provider>
    )
}

export const useData = () => {
    const context = useContext(MyContext);
    if (!context) throw new Error("useData must be used within MyContext.Provider");
    return context;
}
