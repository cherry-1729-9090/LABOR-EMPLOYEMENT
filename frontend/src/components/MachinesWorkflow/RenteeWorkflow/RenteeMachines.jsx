import React, { useEffect, useState } from 'react';
import { List, Card, Button, Image, Typography, message } from 'antd';
import './RenteeMachines.css';
import { useAppContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';
import { getEquipmentByUserId, deleteEquipment } from '../../../calls/equipmentCalls';

const { Title, Text } = Typography;

function RenteeMachines() {
    const [machines, setMachines] = useState([]);
    const { userId, setRenteeId, setMachineId } = useAppContext();
    console.log('userId', userId);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchMachines() {
            try {
                setRenteeId(userId);
                console.log("userId", userId);
                const machines = await getEquipmentByUserId(userId);
                setMachines(machines);
            } catch (err) {
                message.error('Failed to fetch machines');
            }
        }
        fetchMachines();
    }, [userId, setRenteeId]);

    const removeMachine = async (equipmentId, index) => {
        console.log('equipmentId', equipmentId);
        try {
            await deleteEquipment(equipmentId);
            message.success('Machine removed successfully');
            const updatedMachines = machines.filter((_, i) => i !== index);
            setMachines(updatedMachines);
        } catch (err) {
            message.error('Failed to remove machine');
        }
    };

    const handleCardClick = (machineId, machineStatus) => {
        setMachineId(machineId);
        if (machineStatus === 'inUsage') {
            navigate(`/machines/rentee/current-rented-machines`);
        } else {
            navigate(`/machines/rentee/machine-details`);
        }
    };

    const Addmachine = ()=>{
        navigate('/machines/rentee/add-machine');
    }

    return (
        <div className='RenteeMachines'>
            <Title level={1}>Your Machines</Title>
            <List
                dataSource={machines}
                renderItem={(machine, index) => (
                    <List.Item>
                        <Card
                            onClick={() => handleCardClick(machine.id, machine.status)}
                            cover={<Image src='#' className='machineImage' alt='Machine' />}
                        >
                            <Card.Meta
                                title={machine.name}
                                description={
                                    <>
                                        <Text className='machineStatus'>{machine.status === 'inUsage' ? 'In Usage' : 'Available'}</Text>
                                        <br />
                                        <Text className='machineRating'>Rating: {machine.rating}⭐</Text>
                                    </>
                                }
                            />
                            {machine.status !== 'inUsage' && (
                                <Button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeMachine(machine.id, index);
                                    }}
                                >
                                    Remove Machine
                                </Button>
                            )}
                        </Card>
                    </List.Item>
                )}
            />

            <Button type='primary' className='addMachine' onClick={Addmachine}>Add a Machine</Button>
        </div>
    );
}

export default RenteeMachines;
