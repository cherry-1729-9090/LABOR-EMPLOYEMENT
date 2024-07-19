import React, { useEffect, useState } from 'react';
import { Select, Card, Row, Col, Typography } from 'antd';
import { useAppContext } from '../../GlobalContext';
import { getEquipmentByCategory } from '../../../calls/equipmentCalls';
import './MachinesAvailable.css';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;
const { Option } = Select;

function MachinesAvailable() {
    const [machinesAvl, setMachinesAvl] = useState([]);
    const [sortedMachines, setSortedMachines] = useState([]);
    const { category, setMachineId } = useAppContext(); // Destructure setMachineId
    const navigate = useNavigate();


    useEffect(() => {
        const fetchMachines = async () => {
            try {
                const data = await getEquipmentByCategory(category);
                setMachinesAvl(data);
                setSortedMachines(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMachines();
    }, [category]);

    const handleSortChange = (value) => {
        let sorted = [...machinesAvl];
        switch (value) {
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            case 'location':
                sorted.sort((a, b) => a.location.localeCompare(b.location));
                break;
            case 'price':
                sorted.sort((a, b) => a.price - b.price);
                break;
            default:
                // Default case: no sorting
                sorted = [...machinesAvl];
        }
        setSortedMachines(sorted);
    };

    const handleMachineClick = (id) => {
        setMachineId(id); // Set the selected machine ID
        navigate('/machines/borrower/brw-machine-details'); // Navigate to the machine details page
    };

    return (
        <div className='MachinesAvailable'>
            <div className='header'>
                <Title level={1}>Machines Available</Title>
                <Select
                    defaultValue=''
                    onChange={handleSortChange}
                    style={{ width: '200px' }}
                >
                    <Option value=''>Sort By</Option>
                    <Option value='rating'>Rating</Option>
                    <Option value='location'>Location</Option>
                    <Option value='price'>Price</Option>
                </Select>
            </div>

            <Row gutter={16} className='AvailableMachines'>
                {sortedMachines.map((machine) => (
                    <Col span={8} key={machine.id}>
                        <Card
                            hoverable
                            cover={<img alt={machine.name} src={machine.image} />}
                            onClick={() => handleMachineClick(machine.id)} // Add onClick handler
                        >
                            <Card.Meta
                                title={machine.name}
                                description={
                                    <>
                                        <p>{machine.location}</p>
                                        <p>Rating: {machine.rating} ⭐</p>
                                        <p>Price: ${machine.price}</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MachinesAvailable;
