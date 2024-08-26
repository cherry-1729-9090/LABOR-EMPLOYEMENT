import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './GlobalContext';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import './LoginPage.css';
import { auth } from '../config/firebase'; // Ensure this path is correct
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setMobileNumber } = useAppContext();
  const [localMobileNumber, setLocalMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   try {
  //     console.log("Initializing reCAPTCHA...");
  //     if (!window.recaptchaVerifier) {
  //       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  //         'size': 'invisible',
  //         'callback': (response) => {
  //           // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         },
  //       });

  //       // window.recaptchaVerifier.render().catch((error) => {
  //       //   console.error('Error rendering reCAPTCHA:', error);
  //       // });
  //     }
  //   } catch (error) {
  //     console.error('Error initializing reCAPTCHA:', error);
  //   }
  // }, []);
  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
  
    try {
      console.log(localMobileNumber);
      setMobileNumber(localMobileNumber);
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
  
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            console.log('reCAPTCHA solved:', response);
            sendOTP();
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired');
            window.recaptchaVerifier.clear();
            window.recaptchaVerifier = null;
            setIsSubmitting(false);
            message.error('reCAPTCHA expired. Please try again.');
          }
        });
      }
  
      const sendOTP = async () => {
        try {
          const phoneNumber = `+91${localMobileNumber}`;
          console.log("Attempting to send OTP to:", phoneNumber);
          const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
          console.log("OTP sent successfully");
          window.confirmationResult = confirmationResult;
          message.success('OTP sent successfully!');
          navigate('/otp-verification');
        } catch (error) {
          console.error("Detailed error during signInWithPhoneNumber:", error);
          console.error("Error code:", error.code);
          console.error("Error message:", error.message);
          message.error(`Failed to send OTP: ${error.message}`);
          if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
            window.recaptchaVerifier = null;
          }
        } finally {
          setIsSubmitting(false);
        }
      };
  
      if (!window.recaptchaVerifier.widgetId) {
        console.log("Rendering reCAPTCHA");
        await window.recaptchaVerifier.render();
      }
      
      sendOTP();
  
    } catch (error) {
      console.error('Detailed error during OTP request:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      message.error(`Error: ${error.message}`);
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setLocalMobileNumber(value);
      setMobileNumber(value);
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
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginPage;
