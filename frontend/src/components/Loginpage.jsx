"use client";
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './GlobalContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setMobileNumber } = useAppContext();
  const [localMobileNumber, setLocalMobileNumber] = useState('');

  const handleSubmit = () => {
    console.log(localMobileNumber);
    setMobileNumber(localMobileNumber);
    axios.post('http://localhost:3500/api/auth/send-otp', { mobileNumber: localMobileNumber }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      // Navigate to OTP Verification page upon successful OTP request
      navigate('/otp-verification');
    })
    .catch((error) => {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Axios error:', error.message);
      }
    });
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
    <div className='container'>
      <div className='contUpDiv'>
        <h1>Login</h1>
        <div className='mobileNumber'>
          <label>Enter your mobile number</label>
          <input
            type='text'
            className='mobileinp'
            placeholder='Enter mobile number'
            value={localMobileNumber}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <input type='checkbox' /> Remember me
        </div>
      </div>

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LoginPage;
