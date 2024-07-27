import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../calls/userCalls'; // Import the correct API function
import { useAppContext } from './GlobalContext';

function UserDetails() {
  const { mobileNumber, userId } = useAppContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  console.log('userId', userId);
  const onFinish = async (values) => {
    try {
      // Combine the mobile number into the form values
      const userDetails = { ...values, mobileNumber };

      // Save user details using the updateUser API function
      const response = await updateUser(userId, userDetails);
      console.log('response', response);  
      if (response) {
        message.success('Details saved successfully');
        navigate('/role-selection'); // Navigate to RoleSelection page
      } else {
        message.error('Failed to save details');
      }
    } catch (error) {
      console.error('Error saving user details:', error);
      message.error('Failed to save details');
    }
  };

  return (
    <Card title="User Details" style={{ width: '100vw', height: '100vh' }}>
      <Form
        form={form}
        layout="vertical"
        style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please enter your first name!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please enter your last name!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="mobileNumber"
          label="Mobile Number"
          initialValue={mobileNumber}
        >
          <Input placeholder="Mobile Number" disabled />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please enter your location!' }]}
        >
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#FFC0CB', borderColor: '#FFC0CB' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default UserDetails;
