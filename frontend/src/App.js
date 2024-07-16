import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage'; // Make sure the import path is correct
import OtpVerification from './components/OtpVerification';
import RenteeMachines from './components/MachinesWorkflow/RenteeWorkflow/RenteeMachines';
import MachineDetails from './components/MachinesWorkflow/RenteeWorkflow/MachineDetails';
import CurrentRentedMachine from './components/MachinesWorkflow/RenteeWorkflow/CurrentRentedMachine';
import RenteeDetails from './components/MachinesWorkflow/RenteeWorkflow/RenteeDetails';
import AddMachine from './components/MachinesWorkflow/RenteeWorkflow/AddMachine'
import OwnerRentalInfo from './components/MachinesWorkflow/RenteeWorkflow/OwnerRentalInfo'
import MachinesRented from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesRented';
import MachinesForRent from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesForRent';
import MachinesAvailable from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesAvailable';
import BrwMachineDetails from './components/MachinesWorkflow/BorrowerWorkFlow/BrwMachineDetails';
import BrwOwnerDetails from './components/MachinesWorkflow/BorrowerWorkFlow/BrwOwnerDetails';

function App() {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="App">
      {/* <Loginpage mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />
      <OtpVerification mobileNumber={mobileNumber} /> */}
      {/* <RenteeMachines/> */}
      {/* <MachineDetails/> */}
      {/* <CurrentRentedMachine/> */}
      {/* <RenteeDetails/> */}
      {/* <AddMachine/> */}
      {/* <OwnerRentalInfo/> */}
      {/* <MachinesRented/> */}
      {/* <MachinesForRent/> */}
      {/* <MachinesAvailable/> */}
      {/* <BrwMachineDetails/> */}
      {/* <BrwOwnerDetails/> */}
    </div>
  );
}

export default App;
