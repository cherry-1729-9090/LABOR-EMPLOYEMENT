import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './OwnerRentalInfo.css';
import { getUserById } from '../../../calls/userCalls';
import { createEquipment } from '../../../calls/equipmentCalls';
import { useAppContext } from '../../GlobalContext';

const { Title } = Typography;

function OwnerRentalInfo() {
    const location = useLocation();
    const navigate = useNavigate();
    const { machine, machinePhoto } = location.state || {};
    const [form] = Form.useForm();
    const [user, setUser] = useState(null);
    const { userId } = useAppContext();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserById(userId);
                setUser(userData);
                // Pre-fill the form with user data
                form.setFieldsValue({
                    ownerName: `${userData.firstName} ${userData.lastName}`,
                    ownerMobile: userData.phone,
                    ownerLocation: userData.location,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                message.error('Failed to fetch user data');
            }
        };

        fetchUser();
    }, []);

    const handleSubmit = async (values) => {
        try {
            const equipmentData = {
                name: machine.machineName,
                rentalPrice: parseFloat(values.rentalPrice),
                availabilityStatus: 'available', // You might want to add this as a form field
                postedBy: userId,
                description: machine.specifications,
                location: values.ownerLocation,
                type: machine.category,
                images: machinePhoto ? [URL.createObjectURL(machinePhoto)] : [],
                specifications: machine.specifications,
                attachments: machine.attachments,
                depositRequired: parseFloat(values.rentalDeposit),
                yearOfManufacture: machine.yearOfPurchase,
                modelAndMake: machine.modelMake,
                category: machine.category,
            };

            await createEquipment(equipmentData);
            message.success('Equipment created successfully');
            navigate('/machines/rentee/rentee-machines'); // Or wherever you want to redirect after success
        } catch (error) {
            console.error('Error creating equipment:', error);
            message.error('Failed to create equipment');
        }
    };

    return (
        <div className='OwnerRentalInfo'>
            <Title level={2}>Owner and Rental Information</Title>
            <Form form={form} layout='vertical' onFinish={handleSubmit}>
                <section className='ownerInfo'>
                    <Title level={3}>Owner Information</Title>
                    <Form.Item name='ownerName' label='Name' rules={[{ required: true, message: 'Please enter the owner\'s name' }]}>
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item name='ownerMobile' label='Mobile Number' rules={[{ required: true, message: 'Please enter the owner\'s mobile number' }]}>
                        <Input placeholder='Mobile Number' />
                    </Form.Item>
                    <Form.Item name='ownerLocation' label='Location' rules={[{ required: true, message: 'Please enter the owner\'s location' }]}>
                        <Input placeholder='Location' />
                    </Form.Item>
                </section>
                <section className='rentalInfo'>
                    <Title level={3}>Rental Information</Title>
                    <Form.Item name='rentalPrice' label='Rental Price' rules={[{ required: true, message: 'Please enter the rental price' }]}>
                        <Input type="number" placeholder='Rental Price' />
                    </Form.Item>
                    <Form.Item name='rentalAvailability' label='Availability' rules={[{ required: true, message: 'Please enter the rental availability' }]}>
                        <Input placeholder='Availability' />
                    </Form.Item>
                    <Form.Item name='rentalDeposit' label='Deposit Required' rules={[{ required: true, message: 'Please enter the deposit required' }]}>
                        <Input type="number" placeholder='Deposit Required' />
                    </Form.Item>
                </section>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Add Machine
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default OwnerRentalInfo;