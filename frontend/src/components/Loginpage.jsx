import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './GlobalContext';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import './LoginPage.css';

const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setMobileNumber } = useAppContext();
  const [localMobileNumber, setLocalMobileNumber] = useState('');

  const handleSubmit = async () => {
    try {
      console.log(localMobileNumber);
      setMobileNumber(localMobileNumber);
      const response = await axios.post('https://labor-employement.onrender.com/api/auth/send-otp', { mobileNumber: localMobileNumber }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      message.success('OTP sent successfully!');
      // Navigate to OTP Verification page upon successful OTP request
      navigate('/otp-verification');
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
        message.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Request error:', error.request);
        message.error('Request error. Please try again.');
      } else {
        console.error('Axios error:', error.message);
        message.error(`Error: ${error.message}`);
      }
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setLocalMobileNumber(value);
      setMobileNumber(value); // Set the mobile number in the global context
    }
  };

  const handleKeyDown = (event) => {
    if (!((event.key >= '0' && event.key <= '9') || event.key === 'Backspace' || event.key === 'Delete')) {
      event.preventDefault();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Title level={2} className="login-title">Login</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Enter your mobile number"
            name="mobileNumber"
            rules={[
              { required: true, message: 'Please enter your mobile number!' },
              { pattern: /^\d{10}$/, message: 'Mobile number should be 10 digits long.' }
            ]}
          >
            <Input
              placeholder="Enter mobile number"
              value={localMobileNumber}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              maxLength={10}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
