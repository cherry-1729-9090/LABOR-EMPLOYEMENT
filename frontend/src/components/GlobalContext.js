import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [machineCategory, setMachineCategory] = useState(null);
  const [machineId, setMachineId] = useState(null);
  const [MachineOwnerId, setMachineOwnerId] = useState(null);
  const [BorrowerId, setBorrowerId] = useState(null);
  const [RenteeId, setRenteeId] = useState(null);
  const [contractorId,setContractorId] = useState(null);
  const [mobileNumber,setMobileNumber] = useState(null);


  return (
    <AppContext.Provider value={{
      userId, setUserId,
      selectedRole, setSelectedRole,
      machineCategory, setMachineCategory,
      machineId, setMachineId,
      MachineOwnerId, setMachineOwnerId,
      BorrowerId, setBorrowerId,
      RenteeId, setRenteeId,
      contractorId, setContractorId,
      mobileNumber, setMobileNumber,
      selectedEquipmentId, setSelectedEquipmentId,
      projectId, setProjectId,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
