"use client";
import axios from 'axios';
import React from 'react';
import './LoginPage.css';

function LoginPage({ mobileNumber, setMobileNumber }) {

  function handleSubmit() {
    console.log(mobileNumber);
    axios.post('http://localhost:3500/send-otp', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        mobileNumber: mobileNumber
      }
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleInputChange(event) {
    const value = event.target.value;
    // Only update state if the value is numeric
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobileNumber(value);
    }
  }

  function handleKeyDown(event) {
    // Allow only numeric keys, backspace, and delete
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
