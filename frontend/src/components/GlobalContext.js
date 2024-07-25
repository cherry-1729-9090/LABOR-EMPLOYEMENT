import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [machineCategory, setMachineCategory] = useState('');
  const [machineId, setMachineId] = useState('');
  const [MachineOwnerId, setMachineOwnerId] = useState('');
  const [BorrowerId, setBorrowerId] = useState('');
  const [RenteeId, setRenteeId] = useState('');
  const [contractorId, setContractorId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

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
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
