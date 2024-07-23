import React, { useState } from 'react';
import { Form, Input, Select, Button, Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './AddMachine.css';

const { Title } = Typography;
const { Option } = Select;

function AddMachine() {
    const [form] = Form.useForm();
    const [machinePhoto, setMachinePhoto] = useState(null);
    const navigate = useNavigate();

    const handlePhotoChange = ({ file }) => {
        setMachinePhoto(file);
    };

    const handleSubmit = (values) => {
        const machine = values;
        navigate('/machines/rentee/owner-rental-info', { state: { machine, machinePhoto } });
    };

    return (
        <div className='AddMachine'>
            <Title level={2}>Enter Machine Details</Title>
            <Form form={form} layout='vertical' onFinish={handleSubmit}>
                <Form.Item
                    name='machineName'
                    label='Machine Name'
                    rules={[{ required: true, message: 'Please enter the machine name' }]}
                >
                    <Input placeholder='Machine Name' />
                </Form.Item>
                <Form.Item
                    name='category'
                    label='Category'
                    rules={[{ required: true, message: 'Please select a category' }]}
                >
                    <Select placeholder='Category'>
                        <Option value='Sowing and Planting'>Sowing and Planting</Option>
                        <Option value='Harvesting'>Harvesting</Option>
                        <Option value='Ploughs'>Ploughs</Option>
                        <Option value='Tractors'>Tractors</Option>
                        <Option value='Tractor Blades'>Tractor Blades</Option>
                        <Option value='Other'>Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='modelMake'
                    label='Model and Make'
                    rules={[{ required: true, message: 'Please enter the model and make' }]}
                >
                    <Input placeholder='Model and Make' />
                </Form.Item>
                <Form.Item
                    name='yearOfPurchase'
                    label='Year of Purchase'
                    rules={[{ required: true, message: 'Please enter the year of purchase' }]}
                >
                    <Input placeholder='Year of Purchase' />
                </Form.Item>
                <Form.Item
                    name='specifications'
                    label='Specifications'
                >
                    <Input placeholder='Specifications (if any)' />
                </Form.Item>
                <Form.Item
                    name='condition'
                    label='Condition'
                    rules={[{ required: true, message: 'Please enter the condition' }]}
                >
                    <Input placeholder='Condition' />
                </Form.Item>
                <Form.Item
                    name='attachments'
                    label='Attachments/Accessories'
                >
                    <Input placeholder='Attachments/Accessories (if needed)' />
                </Form.Item>
                <Form.Item
                    name='machinePhoto'
                    label='Machine Photo'
                >
                    <Upload
                        listType='picture'
                        beforeUpload={() => false}
                        onChange={handlePhotoChange}
                    >
                        <Button icon={<UploadOutlined />}>Upload Machine Photo</Button>
                    </Upload>
                    {machinePhoto && <img src={URL.createObjectURL(machinePhoto)} alt='Machine' className='machinePhotoPreview' />}
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Proceed
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddMachine;