import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useAppContext } from './GlobalContext';
import { createUser } from '../calls/userCalls';

function UserDetails({ MobileNumber }) {
  const { userId, setUserId } = useAppContext();

  async function onFinish(values) {
    console.log(values);
    try {
      const response = await createUser(values);
      setUserId(response.id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card title="OTP Verification Mobile" style={{ width: '100vw', height: '100vh' }}>
      <Form layout="vertical" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }} onFinish={onFinish}>
        <Form.Item
          name="details"
          label="Enter the Details"
          rules={[{ required: true, message: 'Please enter the details!' }]}
        >
          <Input placeholder="Enter the Details" />
        </Form.Item>
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
          rules={[{ required: true, message: 'Please enter your mobile number!' }]}
        >
          <Input placeholder="Mobile Number" />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please enter your location!' }]}
        >
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '80vw', backgroundColor: '#FFC0CB', borderColor: '#FFC0CB' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default UserDetails;
