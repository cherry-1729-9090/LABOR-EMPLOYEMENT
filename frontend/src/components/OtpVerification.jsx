import React, { useState } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/reset.css';
import './OtpVerification.css';
import { createUser, getUserByNumber } from '../calls/userCalls';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './GlobalContext';



function OtpVerification({ mobileNumber }) {
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const navigate = useNavigate();
  const { userId, setUserId } = useAppContext();

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
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mobileNumber: mobileNumber,
          otpCode: values
        })
      });
      const data = await response.json();
      console.log(data);

      if (data.message === 'OTP verified successfully') {
        try {
          const user = await getUserByNumber(mobileNumber); 
          if (user) {
            setUserId(user._id);
            navigate('/role-selction');
          } else {
            await createUser({ mobileNumber: mobileNumber });
            const newUser = await getUserByNumber(mobileNumber);
            setUserId(newUser._id);
            navigate('/user-details'); 
          }
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      console.error(err);
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
