import React from 'react';
import { ConfigProvider } from 'antd';
import RoleSelection from './components/RoleSelection';
import OtpVerification from './components/OtpVerification';

function App() {
  return (
    <ConfigProvider>
      {/* <RoleSelection /> */}
      <OtpVerification />
    </ConfigProvider>
  );
}

export default App;