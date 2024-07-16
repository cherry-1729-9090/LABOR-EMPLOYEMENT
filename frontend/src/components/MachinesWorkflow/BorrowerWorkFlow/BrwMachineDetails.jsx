import React, { useEffect } from 'react'
import './BrwMachineDetails.css'


function BrwMachineDetails() {


    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data))
    })



    return (
        <div className='BrwMachineDetails'>
            <h1>Machine Details</h1>
            <div>
                <div className='brwMachDet'>
                    <p>Machine Name</p>
                </div>

                <div className='brwMachDet'>
                    <p>Category</p>
                </div>

                <div className='brwMachDet'>
                    <p>Model and Make</p>
                </div>

                <div className='brwMachDet'>
                    <p>Year of Manufacture</p>
                </div>

                <div className='brwMachDet'>
                    <p>Specifications</p>
                </div>

                <div className='brwMachDet'>
                    <p>Attachment/Accessories</p>
                </div>


                <div className='brwMachDet'>
                    <p>Desposit required</p>
                </div>
            </div>
            <button>Rent Machine</button>
        </div>
    )
}

export default BrwMachineDetails
