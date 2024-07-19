import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, Divider, Carousel } from 'antd';
import './BrwMachineDetails.css';
import { useAppContext } from '../../GlobalContext';
import { getEquipmentById } from '../../../calls/equipmentCalls';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

function BrwMachineDetails() {
    const { machineId,setOwnerId } = useAppContext();
    const [machineDetails, setMachineDetails] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMachineDetails = async () => {
            try {
                const data = await getEquipmentById(machineId);
                setMachineDetails(data);
            } catch (error) {
                console.error('Error fetching machine details:', error);
            }
        };

        if (machineId) {
            fetchMachineDetails();
            navigate('/machines/borrower/vendor-details');
        }
    }, [machineId]);

    function handleRentMachine() {
        console.log('Renting machine:', machineDetails);
        
    }

    return (
        <div className='BrwMachineDetails'>
            <Title level={1}>Machine Details</Title>
            {machineDetails ? (
                <Card bordered={false} style={{ maxWidth: 800, margin: '0 auto' }}>
                    {machineDetails.images && machineDetails.images.length > 0 && (
                        <Carousel autoplay>
                            {machineDetails.images.map((image, index) => (
                                <div key={index}>
                                    <img 
                                        alt={`Equipment ${index + 1}`} 
                                        src={image} 
                                        style={{ width: '100%', height: 'auto' }} 
                                    />
                                </div>
                            ))}
                        </Carousel>
                    )}
                    <Title level={3} style={{ marginTop: '16px' }}>{machineDetails.name}</Title>
                    <Divider />

                    <Paragraph><strong>Category:</strong> {machineDetails.category}</Paragraph>
                    <Paragraph><strong>Model and Make:</strong> {machineDetails.modelAndMake}</Paragraph>
                    <Paragraph><strong>Year of Manufacture:</strong> {machineDetails.yearOfManufacture}</Paragraph>
                    <Paragraph><strong>Specifications:</strong> {machineDetails.specifications}</Paragraph>
                    <Paragraph><strong>Attachments/Accessories:</strong> {machineDetails.attachments}</Paragraph>
                    <Paragraph><strong>Deposit Required:</strong> ${machineDetails.depositRequired}</Paragraph>
                    <Paragraph><strong>Rental Price:</strong> ${machineDetails.rentalPrice}</Paragraph>
                    <Paragraph><strong>Availability Status:</strong> {machineDetails.availabilityStatus}</Paragraph>
                    <Paragraph><strong>Description:</strong> {machineDetails.description}</Paragraph>
                    <Paragraph><strong>Location:</strong> {machineDetails.location}</Paragraph>
                    <Paragraph><strong>Ratings:</strong> {machineDetails.ratings ? `${machineDetails.ratings} ⭐` : 'No ratings yet'}</Paragraph>

                    <Button type="primary" size="large" onClick={handleRentMachine}>Rent Machine</Button>
                </Card>
            ) : (
                <Paragraph>Loading machine details...</Paragraph>
            )}
        </div>
    );
}

export default BrwMachineDetails;
