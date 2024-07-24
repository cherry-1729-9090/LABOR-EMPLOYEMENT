import React, { useState } from 'react';
import { Card, Radio, Typography, Space, message, Spin } from 'antd';
import { useAppContext } from './GlobalContext';
import { getUserById, updateUser } from '../calls/userCalls'; // Import your API functions
import { useNavigate } from 'react-router-dom'; // For navigation after update
const { Title } = Typography;

function RoleSelection() {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId, setSelectedRole } = useAppContext();
  const navigate = useNavigate();

  const mapRoleToUserType = (role) => {
    switch (role) {
      case 'hire_labor':
        return 'contractor';
      case 'sell_machines':
        return 'seller';
      case 'rent_machines':
        return 'buyer';
      case 'worker':
        return 'labor_worker';
      default:
        return null;
    }
  };

  const onChange = async (e) => {
    const selectedRole = e.target.value;
    setValue(selectedRole);
    setSelectedRole(selectedRole);

    if (userId) {
      try {
        const updatedUser = await updateUser(userId, { userType: mapRoleToUserType(selectedRole) });
        setLoading(false);
        if (updatedUser) {
          message.success('Role updated successfully');
          switch (selectedRole) {
            case 'hire_labor':
              navigate('/contractor/project-list');
              break;
            case 'worker':
              navigate('/labor/main');
              break;
            case 'sell_machines':
              navigate('/machines/rentee/rentee-machines');
              break;
            case 'rent_machines':
              navigate('/machines/borrower/machines-rented');
              break;
            default:
              break;
          }
        } else {
          message.error('Failed to update role');
        }
      } catch (error) {
        setLoading(false);
        console.error('Error updating user role:', error);
        message.error('Failed to update role');
      }
    } else {
      message.error('User ID is missing');
    }
  };

  const options = [
    { label: 'Hire labor', value: 'hire_labor' },
    { label: 'Sell Machines', value: 'sell_machines' },
    { label: 'Rent Machines', value: 'rent_machines' },
    { label: 'Worker', value: 'worker' },
  ];

  return (
    <Card style={{ width: '100vw', height: '100vh' }}>
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
