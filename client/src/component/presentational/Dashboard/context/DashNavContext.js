// DashNavContext.js
import React, { createContext, useContext, useState } from 'react';

const DashNavContext = createContext();

export const DashNav = ({ children }) => {
    const [DashNavItem, setDashNavItem] = useState("exploreEvents");

    return (
        <DashNavContext.Provider value={{ DashNavItem, setDashNavItem }}>
            {children}
        </DashNavContext.Provider>
    );
};

export const useDashNav = () => useContext(DashNavContext);
