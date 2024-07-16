import React, { useEffect, useState } from 'react';
import './MachinesAvailable.css';

function MachinesAvailable() {
    const [machinesAvl, setMachinesAvl] = useState([]);

    useEffect(() => {
        // Simulating fetching data from an API
        const fetchData = async () => {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error('Failed to fetch machines data');
                }
                const data = await response.json();
                setMachinesAvl(data);
            } catch (error) {
                console.error('Error fetching machines:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='MachinesAvailable'>
            <h1>Machines Available</h1>
            <div className='sortOption'>
                <select>
                    <option value=''>Sort By</option>
                    <option value='rating'>Rating</option>
                    <option value='location'>Location</option>
                    <option value='price'>Price</option>
                </select>
            </div>

            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>

            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>

            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>

            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>

            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>

            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>


            <div className='machineItem'>
                <img src='' alt='Machine' />
                <div>
                    <h3>Machine Name</h3>
                    <p>Location</p>
                </div>
                <p>Rating : 0 ⭐</p>
            </div>

            <div className='AvailableMachines'>
                {machinesAvl.map((machine, index) => (
                    <div className='machineItem' key={index}>
                        <img src={machine.image} alt='Machine' />
                        <div>
                            <h3>{machine.name}</h3>
                            <p>{machine.location}</p>
                        </div>
                        <p>Rating : {machine.rating} ⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MachinesAvailable;
