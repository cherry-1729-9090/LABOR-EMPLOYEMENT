import React, { useState } from 'react';
import './MachinesForRent.css';

function MachinesForRent() {
    const [formData, setFormData] = useState({
        category: '',
        machineName: '',
        rentalStartTime: '',
        rentalEndTime: ''
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
        <div className='MachinesForRent'>
            <h1>Enter the following</h1>
            <form onSubmit={handleSubmit} className='mfrDet'>
                <select
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    className='mrfInput'
                >
                    <option value=''>Category</option>
                    <option value='Sowing and Planting'>Sowing and Planting</option>
                    <option value='Harvesting'>Harvesting</option>
                    <option value='Ploughs'>Ploughs</option>
                    <option value='Tractors'>Tractors</option>
                    <option value='Tractor Blades'>Tractor Blades</option>
                    <option value='Other'>Other</option>
                </select>
                <label htmlFor='rentalStartTime'>Start Time</label>
                <input
                    type='datetime-local'
                    name='rentalStartTime'
                    value={formData.rentalStartTime}
                    onChange={handleChange}
                    className='mrfInput'
                />
                <label htmlFor='rentalEndTime'>End Time</label>
                <input
                    type='datetime-local'
                    name='rentalEndTime'
                    value={formData.rentalEndTime}
                    onChange={handleChange}
                    className='mrfInput'
                />
            </form>
            <button type='submit'>Submit</button>
        </div>
    );
}

export default MachinesForRent;
