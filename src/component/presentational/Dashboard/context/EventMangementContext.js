import React, { createContext, useContext, useState } from 'react';

const EventManagementContext = createContext();

export const EventProvider = ({ children }) => {
    const [organizedEvents, setOrganizedEvents] = useState(0);
    const [joinedEvents, setJoinedEvents] = useState(0);
    const [ joinedCount,setJoinedCount] = useState(0);

    return (
        <EventManagementContext.Provider value={{ organizedEvents, setOrganizedEvents, joinedEvents, setJoinedEvents,joinedCount, setJoinedCount }}>
            {children}
        </EventManagementContext.Provider>
    );
};

export const useEventManagement = () => useContext(EventManagementContext);
