import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, Image, Row, Col } from 'antd';
import './MachinesRented.css';
import { getPurchaseTransactionByBuyerId } from '../../../calls/PurchaseTransactionsCalls';
import { useAppContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

function MachinesRented() {
    const [machinesRented, setMachinesRented] = useState([]);
    const { userId, setMachineOwnerId } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMachines() {
            try {
                const transactions = await getPurchaseTransactionByBuyerId(userId);
                const machines = transactions.map(transaction => transaction.equipmentId);
                setMachinesRented(machines);
            } catch (err) {
                console.log(err);
            }
        }
        fetchMachines();
    }, [userId]);

    function handleRentMachine() {
        navigate('/machines/borrower/machines-for-rent');
    }

    function handleMachineClick(machine) {
        setMachineOwnerId(machine.postedBy);
        if (machine.availabilityStatus === 'In Usage') {
            navigate('/machines/borrower/vendor-details');
        }  
    }

    return (
        <div className='MachinesRented'>
            <Title level={1}>Your Machines</Title>
            <section className='MachinesBox'>
                {machinesRented.length > 0 ? (
                    <Row gutter={[16, 16]}>
                        {machinesRented.map(machine => (
                            <Col key={machine._id} xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    hoverable
                                    cover={<Image alt={machine.name} src={machine.imageUrl || '#'} />}
                                    onClick={() => handleMachineClick(machine)}
                                >
                                    <Card.Meta
                                        title={machine.name}
                                        description={
                                            <>
                                                <Text>{machine.availabilityStatus}</Text>
                                                <br />
                                                <Text>Rating: {machine.rating || 0}⭐</Text>
                                            </>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div>
                        <Title level={2}>No Machines Rented</Title>
                    </div>
                )}
                <Button type="primary" style={{ marginTop: '20px' }} onClick={handleRentMachine}>
                    Rent a Machine
                </Button>
            </section>
        </div>
    );
}

export default MachinesRented;