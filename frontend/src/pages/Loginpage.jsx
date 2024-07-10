import React from 'react'
import './LoginPage.css'

function Loginpage() {
  return (
    <div>
      <section className='container'>
        <div>
          <h1>Login</h1>

          <div>
            <label>Please enter your mobile Number</label>
            <input type='text' placeholder='Enter mobile number' />
          </div>
          <div>
            <input type='checkbox' /> Remember me
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

export default Loginpage
