import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './RenteeDetails.css';

const API_URL = 'http://localhost:5000/rentee/';

function RenteeDetails({ renteeId }) {
    const [renteeDetails, setRenteeDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRenteeDetails = async () => {
            try {
                const response = await fetch(`${API_URL}${renteeId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch rentee details');
                }
                const data = await response.json();
                setRenteeDetails(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRenteeDetails();
    }, [renteeId]);

    if (loading) {
        return <p>Loading rentee details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const { profilePic, name, mobile, location, amountToBePaid, remainingContractTime } = renteeDetails;

    return (
        <div className='rentee-details'>
            <h1>Rentee Details</h1>
            <div className='rentee-info'>
                <img src={profilePic} alt="Rentee Profile Pic" className='rentee-profile-pic' />
                <div>
                    <p className='rentee-detail'>Name: {name}</p>
                    <p className='rentee-detail'>Mobile Number: {mobile}</p>
                    <p className='rentee-detail'>Location: {location}</p>
                    <p className='rentee-detail'>Amount to be Paid: {amountToBePaid}</p>
                    <p className='rentee-detail'>Remaining Contract Time: {remainingContractTime}</p>
                </div>
            </div>
            <button>Contact Rentee</button>
        </div>
    );
}

RenteeDetails.propTypes = {
    renteeId: PropTypes.string.isRequired,
};

export default RenteeDetails;
