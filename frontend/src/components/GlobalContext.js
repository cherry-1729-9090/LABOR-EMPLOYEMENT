// AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);

  return (
    <AppContext.Provider value={{ 
      userId, 
      setUserId, 
      selectedEquipmentId, 
      setSelectedEquipmentId 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);