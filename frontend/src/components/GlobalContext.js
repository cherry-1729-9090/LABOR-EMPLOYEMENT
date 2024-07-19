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
      userId,
      setUserId,
      selectedRole,
      setSelectedRole,
      selectedEquipmentId,
      setSelectedEquipmentId,
      machineCategory,
      setMachineCategory,
      machineId,
      setMachineId,
      MachineOwnerId,
      setMachineOwnerId
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);