import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage'; // Make sure the import path is correct
import OtpVerification from './components/OtpVerification';
// import RoleSelectionpage from './components/RoleSelectionpage';

function App() {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="App">
      <Loginpage mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />
      <OtpVerification mobileNumber={mobileNumber} />
      <RoleSelectionpage  />
    </div>
  );
}

export default App;
