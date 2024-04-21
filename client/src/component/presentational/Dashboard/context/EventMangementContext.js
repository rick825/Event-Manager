import React, { createContext, useContext, useState } from 'react';

const EventManagementContext = createContext();

export const EventProvider = ({ children }) => {
    const [organizedEvents, setOrganizedEvents] = useState(0);
    const [joinedEvents, setJoinedEvents] = useState(0);

    return (
        <EventManagementContext.Provider value={{ organizedEvents, setOrganizedEvents, joinedEvents, setJoinedEvents }}>
            {children}
        </EventManagementContext.Provider>
    );
};

export const useEventManagement = () => useContext(EventManagementContext);
