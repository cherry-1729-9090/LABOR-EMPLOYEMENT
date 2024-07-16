import React, { useEffect, useState } from 'react';
import './RenteeMachines.css';

function RenteeMachines() {
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        fetch('api-endpoint')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to fetch machines from Server');
                }
                return response.json();
            })
            .then((data) => {
                setMachines(data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    const removeMachine = (index) => {
        // Function to handle machine removal
        const updatedMachines = machines.filter((_, i) => i !== index);
        setMachines(updatedMachines);
    };

    return (
        <div className='RenteeMachines'>
            <h1>Your Machines</h1>
            
            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>
            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>
            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>

            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>

            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>

            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>

            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>

            <div className="machineItem">
                <img src='#' className='machineImage' />
                <div className='machineDet'>
                    <h2 className='machineName'>Tractor</h2>
                    <p className='machineStatus'>In Usage</p>
                </div>
                <div>
                    <p className='machineRating'>Rating: 0⭐</p>
                </div>
            </div>



            <section className="MachinesSection">
                {machines.length > 0 ? (
                    machines.map((machine, index) => (
                        <div key={index} className="machineItem">
                            <img src='#' className='machineImage' alt='Machine' />
                            <div className='machineDet'>
                                <h2 className='machineName'>{machine.name}</h2>
                                {machine.status === 'inUsage' ? (
                                    <p className='machineStatus'>In Usage</p>
                                ) : (
                                    <button onClick={() => removeMachine(index)}>Remove Machine</button>
                                )}
                            </div>
                            <div className='machineRating'>
                                <p>Rating: {machine.rating}⭐</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No machines available</p>
                )}
            </section>
            <button className='addMachine'>Add a Machine</button>
        </div>
    );
}

export default RenteeMachines;
