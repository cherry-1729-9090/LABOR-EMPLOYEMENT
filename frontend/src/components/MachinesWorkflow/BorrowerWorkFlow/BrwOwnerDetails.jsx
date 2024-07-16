import React from 'react'
import './BrwOwner.css'

function BrwOwnerDetails() {
    return (
        <div className='BrwOwnerDetails'>
            <h1>Owner Details</h1>
            <div className='Brwowner'>
                <div className='brwownerdet'>
                    <p>Name</p>
                </div>
                <div className='brwownerdet'>
                    <p>Mobile Number</p>
                </div>
                <div  className='brwownerdet'>
                    <p>Location</p>
                </div>
            </div>
            <button>View Profile</button>
        </div>
    )
}

export default BrwOwnerDetails