// src/components/OtpVerification.jsx
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/reset.css';
import './OtpVerification.css';
import { createUser, getUserByNumber } from '../calls/userCalls';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from './GlobalContext';

function OtpVerification() {
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const navigate = useNavigate();
  const location = useLocation();
  const { mobileNumber } = useAppContext();
  const { setUserId } = useAppContext();

  function handleOtpChange(e, index) {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value && index < otpValues.length - 1) {
        setTimeout(() => {
          document.querySelectorAll('.otpInp')[index + 1].focus();
        }, 10);
      }
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Backspace' && otpValues[index] === '') {
      if (index > 0) {
        setTimeout(() => {
          document.querySelectorAll('.otpInp')[index - 1].focus();
        }, 10);
      }
    }
  }

  function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    const newOtpValues = paste.split('').slice(0, 6);
    setOtpValues(newOtpValues.concat(Array(6 - newOtpValues.length).fill('')));
    setTimeout(() => {
      document.querySelectorAll('.otpInp')[newOtpValues.length]?.focus();
    }, 10);
  }

  async function handleSubmit() {
    const values = otpValues.join('');
    console.log(values);
    
    try {
        // Verify OTP using Firebase
        const result = await window.confirmationResult.confirm(values);
        if (result.user) {
            console.log("OTP verified successfully!");
            try {
                const userResponse = await getUserByNumber(mobileNumber);
                if (userResponse && !userResponse.message) {
                    console.log("User Response:");
                    console.log(userResponse);
                    console.log(userResponse._id);
                    setUserId(userResponse._id);
                    navigate('/role-selection');
                } else {
                    const newUser = await createUser({ mobileNumber: mobileNumber });
                    console.log(newUser);
                    console.log(newUser._id);
                    setUserId(newUser._id);
                    navigate('/user-details'); 
                }
            } catch (err) {
                console.error(err);
            }
        }
    } catch (err) {
        console.error('Error during OTP verification:', err);
    }
}

  return (
    <div className='otpPage'>
      <div className='otpUpDiv'>
        <h1>Please enter the OTP</h1>
        <div className='otpDiv' onPaste={handlePaste}>
          {otpValues.map((value, index) => (
            <Input
              key={index}
              className='otpInp'
              maxLength={1}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{ width: '40px', textAlign: 'center', margin: '0 5px' }}
            />
          ))}
        </div>
      </div>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default OtpVerification;
