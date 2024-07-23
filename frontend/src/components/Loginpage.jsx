"use client";
import axios from 'axios';
import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = React.useState('');

  function handleSubmit() {
    console.log(mobileNumber);
    axios.post('http://localhost:3500/api/auth/send-otp', {
      mobileNumber: mobileNumber
    })
    .then((response) => {
      console.log(response.data); // Access data directly from response
      navigate('/otp-verification', { state: { mobileNumber: mobileNumber } });
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
    });
  }

  function handleInputChange(event) {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobileNumber(value);
    }
  }

  function handleKeyDown(event) {
    if (!((event.key >= '0' && event.key <= '9') || event.key === 'Backspace' || event.key === 'Delete')) {
      event.preventDefault();
    }
  }

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
            value={mobileNumber}
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
}

export default LoginPage;
