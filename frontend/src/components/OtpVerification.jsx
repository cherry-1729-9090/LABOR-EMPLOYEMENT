import React from 'react';
import './OtpVerification.css';

function OtpVerification() {
  function handleOtp(e) {
    const input = e.target;
    const key = e.key;

    if (!/^[0-9]$/.test(key) && key !== 'Backspace') {
      e.preventDefault();
      return;
    }

    if (/^[0-9]$/.test(key)) {
      input.value = key; 
      const nextInput = input.nextElementSibling;
      if (nextInput && nextInput.tagName === 'INPUT') {
        setTimeout(() => nextInput.focus(), 10); 
      }
    } 

    else if (key === 'Backspace') {
      input.value = ''; 
      const prevInput = input.previousElementSibling;
      if (prevInput && prevInput.tagName === 'INPUT') {
        setTimeout(() => prevInput.focus(), 10); 
      }
    } 
    
    else {
      e.preventDefault(); 
    }
  }

  // auto detect function and entering the otp
  function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    const inputs = document.querySelectorAll('.otpInp');
    inputs.forEach((input, index) => {
      input.value = paste[index] || '';
    });
    inputs[paste.length]?.focus();
  }


  function VerifyOtp(){
    

  }


  return (
    <div className='otpPage'>
      <div className='otpUpDiv'>
        <h1>Please enter the OTP</h1>
        <div className='otpDiv' onPaste={handlePaste}>
          <input type='text' className='otpInp' onKeyDown={handleOtp} maxLength={1} />
          <input type='text' className='otpInp' onKeyDown={handleOtp} maxLength={1} />
          <input type='text' className='otpInp' onKeyDown={handleOtp} maxLength={1} />
          <input type='text' className='otpInp' onKeyDown={handleOtp} maxLength={1} />
          <input type='text' className='otpInp' onKeyDown={handleOtp} maxLength={1} />
          <input type='text' className='otpInp' onKeyDown={handleOtp} maxLength={1} />
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default OtpVerification;
