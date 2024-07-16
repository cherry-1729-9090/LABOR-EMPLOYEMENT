import React, { useState } from 'react';
import './AddMachine.css';

function AddMachine() {
    const [formData, setFormData] = useState({
        machineName: '',
        category: '',
        modelMake: '',
        yearOfPurchase: '',
        specifications: '',
        condition: '',
        attachments: '',
        machinePhoto: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'machinePhoto') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
        console.log('Form Data:', formData);
    };

    return (
        <div className='AddMachine'>
            <h1>Enter Machine Details</h1>
            <form onSubmit={handleSubmit}>
                <section className='macAddDet'>
                    <input
                        name='machineName'
                        placeholder='Machine Name'
                        value={formData.machineName}
                        onChange={handleChange}
                        className='machCat'
                    />
                    <select
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        className='machCat'
                    >
                        <option value=''>Category</option>
                        <option value='Sowing and Planting'>Sowing and Planting</option>
                        <option value='Harvesting'>Harvesting</option>
                        <option value='Ploughs'>Ploughs</option>
                        <option value='Tractors'>Tractors</option>
                        <option value='Tractor Blades'>Tractor Blades</option>
                        <option value='Other'>Other</option>
                    </select>
                    <input
                        name='modelMake'
                        placeholder='Model and Make'
                        value={formData.modelMake}
                        onChange={handleChange}
                        className='machCat'
                    />
                    <input
                        name='yearOfPurchase'
                        placeholder='Year of Purchase'
                        value={formData.yearOfPurchase}
                        onChange={handleChange}
                        className='machCat'
                    />
                    <input
                        name='specifications'
                        placeholder='Specifications (if any)'
                        value={formData.specifications}
                        onChange={handleChange}
                        className='machCat'
                    />
                    <input
                        name='condition'
                        placeholder='Condition'
                        value={formData.condition}
                        onChange={handleChange}
                        className='machCat'
                    />
                    <input
                        name='attachments'
                        placeholder='Attachments/Accessories (if needed)'
                        value={formData.attachments}
                        onChange={handleChange}
                        className='machCat'
                    />
                </section>
                <div className='machinePhoto'>
                    <img src={formData.machinePhoto ? URL.createObjectURL(formData.machinePhoto) : '#'} alt='Machine' />
                    <input
                        type='file'
                        name='machinePhoto'
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Proceed</button>
            </form>
        </div>
    );
}

export default AddMachine;
