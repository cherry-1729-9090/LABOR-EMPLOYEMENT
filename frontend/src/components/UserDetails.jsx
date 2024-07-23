import React from 'react';
import { Form, Input, Button, Card } from 'antd';



function UserDetails({MobileNumber}) {
  return (
    <Card title="otp verification mobile" style={{ width: '100vw',height:'100vh'}}>
      <Form layout="vertical" style={{height:'100vh',display:'flex',flexDirection:'column'}}>
        <Form.Item label="Enter the Details">
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
        <Form.Item label="Mobile Number">
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
