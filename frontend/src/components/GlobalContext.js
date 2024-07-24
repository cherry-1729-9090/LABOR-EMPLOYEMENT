import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
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
      userId, // user for everything
      setUserId,
      selectedRole, // changes the roles from RoleSelection page
      setSelectedRole,
      machineCategory, // changes the machine category from MachinesForRent page
      setMachineCategory,
      machineId, // changes the machine details from MachinesForRent page
      setMachineId,
      MachineOwnerId, // Used in both Rentee and Borrower work flow to show the owner details and in rentee work flow as he is the owner
      setMachineOwnerId,
      BorrowerId, // Used in the Rentee Work flow to show the people who have taken the machines for rent
      setBorrowerId,
      RenteeId, // Used in the Rentee work flow to set it as the rentee
      setRenteeId,
      contractorId, // Used in the Contractor work flow to set the contractor
      setContractorId,
      mobileNumber, // Used in the LoginPage to set the mobile number
      setMobileNumber,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);