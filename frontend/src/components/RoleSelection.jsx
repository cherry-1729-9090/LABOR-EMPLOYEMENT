import React, { useEffect, useState } from 'react';
import { Card, Radio, Typography, Space, message, Spin } from 'antd';
import { useAppContext } from './GlobalContext';
import { getUserById, updateUser } from '../calls/userCalls';
import { createContractor, getContractorByUserId } from '../calls/contractorCalls'; 
import { getLabourWorkerByUserId, createLabourWorker } from '../calls/employees';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

function RoleSelection() {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId, setContractorId, setWorkerId, setSelectedRole } = useAppContext();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(userId);
        setUser(userData);
        console.log('this is the user fetched in the role-selectionPage', userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [userId]);

  const mapRoleToUserType = (role) => {
    switch (role) {
      case 'hire_labor':
        return 'contractor';
      case 'worker':
        return 'labor_worker';
      default:
        return null;
    }
  };

  const handleRoleSelection = async (role) => {
    setLoading(true);

    try {
      if (role === 'hire_labor') {
        const contractor = await getContractorByUserId(userId);
        if (contractor && contractor._id) { // Ensure contractor and _id exist
          console.log('this is the contractor fetched in role-selection page', contractor);
          setContractorId(contractor._id);
        } else {
          const newContractor = await createContractor({ userId }); // Adjust fields as needed
          if (newContractor && newContractor._id) { // Ensure newContractor and _id exist
            console.log('this is the new contractor created in role-selection page', newContractor);
            setContractorId(newContractor._id);
          } else {
            throw new Error('Failed to create contractor');
          }
        }
      } else if (role === 'worker') {
        const worker = await getLabourWorkerByUserId(userId);
        if (worker) {
          console.log('this is the worker fetched in role-selection page', worker);
          setWorkerId(worker._id);
        } else {
          const newWorker = await createLabourWorker({ userId, workerImage: 'default_image.png' });
          setWorkerId(newWorker._id);
        }
      }

      // Update user type
      const updatedUser = await updateUser(userId, { userType: mapRoleToUserType(role) });
      setLoading(false);

      if (updatedUser) {
        message.success('Role updated successfully');
        switch (role) {
          case 'hire_labor':
            navigate('/contractor/project-list');
            break;
          case 'worker':
            navigate('/labor/applied');
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
  };

  const onChange = (e) => {
    const selectedRole = e.target.value;
    setValue(selectedRole);
    setSelectedRole(selectedRole);
    handleRoleSelection(selectedRole);
  };

  const options = [
    { label: 'Hire labor', value: 'hire_labor' },
    { label: 'Worker', value: 'worker' },
  ];

  return (
    <Card style={{ width: '100vw', height: '100vh' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={4}><h1>Choose a Role</h1></Title>
        {loading ? (
          <Spin size="large" />
        ) : (
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
        )}
      </Space>
    </Card>
  );
}

export default RoleSelection;
