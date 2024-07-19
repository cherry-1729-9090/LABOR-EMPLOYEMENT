import React from 'react';
import { ConfigProvider } from 'antd';
import RoleSelection from './components/RoleSelection';
import OtpVerification from './components/OtpVerification';
import MachinesForRent from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesForRent'; 
import UserDetails from './components/UserDetails';
import { AppProvider } from './components/GlobalContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ConfigProvider>
        <AppProvider>
          <Routes>
            <Route path="/RoleSelection" element={<RoleSelection />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/machines-for-rent" element={<MachinesForRent />} />
          </Routes>
        </AppProvider>
      </ConfigProvider>
    </Router>
   
  );
}

export default App;