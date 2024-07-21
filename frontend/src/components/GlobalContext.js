import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [machineCategory, setMachineCategory] = useState(null);
  const [machineId, setMachineId] = useState(null);
  const [MachineOwnerId, setMachineOwnerId] = useState(null);

  return (
    <AppContext.Provider value={{
      userId, // user for everything
      setUserId, 
      selectedRole, // changes the roles from RoleSelection page
      setSelectedRole,
      machineCategory, // changes the machine category from MachinesForRent page
      setMachineCategory,
      machineId, // changes the machine details from MachinesForRent page
      setMachineId,
      MachineOwnerId, // changes the machine owner details from MachinesForRent page
      setMachineOwnerId
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);