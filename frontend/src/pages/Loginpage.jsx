import React from 'react';
import './LoginPage.css';

function LoginPage() {

  function handleSubmit() {
    let mobilenumber = document.querySelector('.mobileinp').value;
    console.log(mobilenumber);
    fetch('http://localhost:3500/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber: mobilenumber }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }


  return (
    <div className='container'>
      <div className='contUpDiv'>
        <h1>Login</h1>
        <div className='mobileNumber'>
          <label>Enter your mobile Number</label>
          <input type='text' className='mobileinp' placeholder='Enter mobile number' />
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
