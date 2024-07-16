import React, { useEffect } from 'react'
import './MachinesRented.css'
import { useState } from 'react';

function MachinesRented() {

    let [machinesRented, setMachinesRented] = useState([]);
    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => {
                setMachinesRented(data);
            })
    }, [])

    return (
        <div className='MachinesRented'>
            <h1>Your Machines</h1>
            <section className='MachinesBox'>
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
                {machinesRented.length > 0 ? (
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
                ) : (
                    <div>
                        {/* Mention that there are no machines rented */}
                        {/* <h2>No Machines Rented</h2> */}
                    </div>
                )}

                <button>Rent a Machine</button>
            </section>
        </div>
    )
}

export default MachinesRented
