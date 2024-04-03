// Create a new file for context, e.g., RefreshContext.js
import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshEventList, setRefreshEventList] = useState(false);

  return (
    <RefreshContext.Provider value={{ refreshEventList, setRefreshEventList }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => useContext(RefreshContext);
