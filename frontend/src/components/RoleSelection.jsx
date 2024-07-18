import React, { useState } from 'react';
import { Card, Radio, Typography, Space } from 'antd';

const { Title } = Typography;

function RoleSelection() {
  const [value, setValue] = useState(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const options = [
    { label: 'Hire labor', value: 'hire_labor' },
    { label: 'Sell Machines', value: 'sell_machines' },
    { label: 'Rent Machines', value: 'rent_machines' },
    { label: 'Worker', value: 'worker' },
  ];

  return (
    <Card style={{ width:'100vw' ,height : '100vh'}}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={4}><h1>Choose a Role</h1></Title>
        <Radio.Group onChange={onChange} value={value} style={{ width: '80vw' }}>
          <Space direction="vertical" style={{ width: '100%' }}>

            {options.map(option => (
              <Radio key={option.value} value={option.value} style={{ 
                width: '100%', 
                height: 40, 
                lineHeight: '40px',
                backgroundColor: '#f5f5f5',
                paddingLeft: 10
              }}>
                {option.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Space>
    </Card>
  );
}

export default RoleSelection;