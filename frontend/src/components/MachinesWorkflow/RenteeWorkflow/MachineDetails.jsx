import React, { useEffect, useState } from 'react';
import { Carousel, Button, Typography, message } from 'antd';
import './MachineDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { getEquipmentById, deleteEquipment } from '../../../calls/equipmentCalls';

const { Title, Paragraph } = Typography;

function MachineDetails() {
    const { machineId } = useParams();
    const [machine, setMachine] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMachineDetails() {
            try {
                const data = await getEquipmentById(machineId);
                setMachine(data);
            } catch (error) {
                message.error('Failed to fetch machine details');
            }
        }
        fetchMachineDetails();
    }, [machineId]);

    const handleRemoveMachine = async () => {
        try {
            await deleteEquipment(machineId);
            message.success('Machine removed successfully');
            navigate('/rentee-machines');
        } catch (error) {
            message.error('Failed to remove machine');
        }
    };

    if (!machine) {
        return <p>Loading...</p>;
    }

    return (
        <div className='MachineDetails'>
            <Title>{machine.name}</Title>
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
                <Paragraph>Number of Times Rented: </Paragraph> 
            </div>
            <div className='mRatings'>
                <Paragraph>Machine Ratings: ⭐</Paragraph>
            </div>
            <div className='machineDetails'>
                <Paragraph>Description: {machine.description}</Paragraph>
                <Paragraph>Location: {machine.location}</Paragraph>
                <Paragraph>Rental Price: {machine.rentalPrice}</Paragraph>
                <Paragraph>Sale Price: {machine.salePrice}</Paragraph>
                <Paragraph>Specifications: {machine.specifications}</Paragraph>
                <Paragraph>Attachments: {machine.attachments}</Paragraph>
                <Paragraph>Deposit Required: {machine.depositRequired}</Paragraph>
                <Paragraph>Year of Manufacture: {machine.yearOfManufacture}</Paragraph>
                <Paragraph>Model and Make: {machine.modelAndMake}</Paragraph>
                <Paragraph>Category: {machine.category}</Paragraph>
            </div>
            <Button type='primary' danger onClick={handleRemoveMachine}>
                Remove Machine
            </Button>
        </div>
    );
}

export default MachineDetails;
