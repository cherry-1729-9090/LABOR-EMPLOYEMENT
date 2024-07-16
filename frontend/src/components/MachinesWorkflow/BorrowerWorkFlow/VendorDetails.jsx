import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './VendorDetails.css';

const API_URL = 'http://localhost:5000/vendor/';

function VendorDetails({ vendorId }) {
    const [vendorDetails, setVendorDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVendorDetails = async () => {
            try {
                const response = await fetch(`${API_URL}${vendorId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch vendor details');
                }
                const data = await response.json();
                setVendorDetails(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVendorDetails();
    }, [vendorId]);

    if (loading) {
        return <p>Loading vendor details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const { profilePic, name, mobile, location, amountToBePaid, remainingContractTime } = vendorDetails;

    return (
        <div className='vendor-details'>
            <h1>Vendor Details</h1>
            <div className='vendor-info'>
                <img src={profilePic} alt="Vendor Profile Pic" className='vendor-profile-pic' />
                <div>
                    <p className='vendor-detail'>Name: {name}</p>
                    <p className='vendor-detail'>Mobile Number: {mobile}</p>
                    <p className='vendor-detail'>Location: {location}</p>
                    <p className='vendor-detail'>Amount to be Paid: {amountToBePaid}</p>
                    <p className='vendor-detail'>Remaining Contract Time: {remainingContractTime}</p>
                </div>
            </div>
            <button>Contact Vendor</button>
        </div>
    );
}

VendorDetails.propTypes = {
    vendorId: PropTypes.string.isRequired,
};

export default VendorDetails;
