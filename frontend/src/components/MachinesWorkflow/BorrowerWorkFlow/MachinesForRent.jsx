import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, Typography } from 'antd';
import './MachinesForRent.css';
import { useAppContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

function MachinesForRent() {
    const { setMachineCategory } = useAppContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        category: '',
        machineName: '',
        rentalStartTime: '',
        rentalEndTime: ''
    });

    const handleChange = (changedValues) => {
        setFormData(prevState => ({
            ...prevState,
            ...changedValues
        }));
    };

    const handleSubmit = (values) => {
        // Process the form data here
        console.log('Form Data:', values);
        setMachineCategory(values.category);
        navigate('/machines/borrower/machines-available');
    };

    return (
        <div className='MachinesForRent'>
            <Title level={1}>Enter the following</Title>
            <Form
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={formData}
                onValuesChange={handleChange}
                className='mfrDet'
            >
                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select placeholder="Select a category">
                        <Option value="Sowing and Planting">Sowing and Planting</Option>
                        <Option value="Harvesting">Harvesting</Option>
                        <Option value="Ploughs">Ploughs</Option>
                        <Option value="Tractors">Tractors</Option>
                        <Option value="Tractor Blades">Tractor Blades</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Start Time"
                    name="rentalStartTime"
                    rules={[{ required: true, message: 'Please select start time!' }]}
                >
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="Select start time"
                    />
                </Form.Item>

                <Form.Item
                    label="End Time"
                    name="rentalEndTime"
                    rules={[{ required: true, message: 'Please select end time!' }]}
                >
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="Select end time"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default MachinesForRent;
