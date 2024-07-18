import React from 'react';
import { ConfigProvider } from 'antd';
import RoleSelection from './components/RoleSelection';

function App() {
  return (
    <ConfigProvider>
      <RoleSelection />
    </ConfigProvider>
  );
}

export default App;