import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MachineDetails.css';


function MachineDetails({ machineId }) {
    // const [machine, setMachine] = useState(null);

    useEffect(() => {
        fetch(``)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch machine details');
                }
                return res.json();
            })
            .then(data => {
                // setMachine(data);
            })
            .catch(error => {
                console.error('Error fetching machine details:', error);
            });
    }, [machineId]);

    const handleRemoveMachine = () => {
        fetch(``, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to remove machine');
                }
                // Handle successful removal, e.g., navigate back or show a success message
            })
            .catch(error => {
                console.error('Error removing machine:', error);
            });
    };

    // if (!machine) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div className='MachineDetails'>
            {/* <h1>{machine.name}</h1>
            <section className='machineImages'>
                <Carousel>
                    {machine.images.map((img, idx) => (
                        <div key={idx}>
                            <img src={img} alt={`Machine Image ${idx + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </section>
            <div className='nTimesRented'>
                <p>Number of Times Rented: {machine.timesRented}</p>
            </div>
            <div className='mRatings'>
                <p>Machine Ratings: {machine.rating}</p>
            </div>
            <button onClick={handleRemoveMachine}>Remove Machine</button> */}


            <h1>machine name</h1>
            <section className='machineImages'>
                {/* <Carousel>
                    {machine.images.map((img, idx) => (
                        <div key={idx}>
                            <img src={img} alt={`Machine Image ${idx + 1}`} />
                        </div>
                    ))}
                </Carousel> */}
                <img src='https://via.placeholder.com/150' alt='Machine Image 1' />
            </section>
            <div className='nTimesRented'>
                <p>Number of Times Rented: 0</p>
            </div>
            <div className='mRatings'>
                <p>Machine Ratings: 0⭐</p>
            </div>
            <button onClick={handleRemoveMachine}>Remove Machine</button>


        </div>
    );
}

export default MachineDetails;
