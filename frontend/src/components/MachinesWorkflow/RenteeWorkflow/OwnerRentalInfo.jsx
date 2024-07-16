import React, { useState } from 'react';
import './OwnerRentalInfo.css';

function OwnerRentalInfo() {
    const [formData, setFormData] = useState({
        ownerName: '',
        ownerMobile: '',
        ownerLocation: '',
        rentalPrice: '',
        rentalAvailability: '',
        rentalDeposit: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
        console.log('Form Data:', formData);
    };

    return (
        <div className='OwnerRentalinfo'>
            <h1>Owner and Rental Information</h1>
            <form onSubmit={handleSubmit}>
                <section className='ownerInfo'>
                    <h2>Owner Information</h2>
                    <input
                        name='ownerName'
                        placeholder='Name'
                        value={formData.ownerName}
                        onChange={handleChange}
                        className='ownerDet'
                    />
                    <input
                        name='ownerMobile'
                        placeholder='Mobile Number'
                        value={formData.ownerMobile}
                        onChange={handleChange}
                        className='ownerDet'
                    />
                    <input
                        name='ownerLocation'
                        placeholder='Location'
                        value={formData.ownerLocation}
                        onChange={handleChange}
                        className='ownerDet'
                    />
                </section>
                <section className='rentalInfo'>
                    <h2>Rental Information</h2>
                    <input
                        name='rentalPrice'
                        placeholder='Rental Price'
                        value={formData.rentalPrice}
                        onChange={handleChange}
                        className='ownerDet'
                    />
                    <input
                        name='rentalAvailability'
                        placeholder='Availability'
                        value={formData.rentalAvailability}
                        onChange={handleChange}
                        className='ownerDet'
                    />
                    <input
                        name='rentalDeposit'
                        placeholder='Deposit Required'
                        value={formData.rentalDeposit}
                        onChange={handleChange}
                        className='ownerDet'
                    />
                </section>
                <button type='submit'>Add Machine</button>
            </form>
        </div>
    );
}

export default OwnerRentalInfo;
