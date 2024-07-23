import React, { useState } from 'react';
import { Form, Input, Select, Button, Upload, Typography, message } from 'antd';
import { UploadOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import './AddMachine.css';
import { createEquipment } from '../../../calls/equipmentCalls';
import { getUserById } from '../../../calls/userCalls';
const { Title } = Typography;
const { Option } = Select;

function AddMachine() {
    const [form] = Form.useForm();
    const [machinePhotos, setMachinePhotos] = useState({});

    const handlePhotoChange = (info, index) => {
        const { file } = info;
        setMachinePhotos(prev => ({
            ...prev,
            [index]: file
        }));
    };

    const handleSubmit = (values) => {
        // Convert form values into an array of machine objects
        const formData = values.machines.map((machine, index) => ({
            ...machine,
            machinePhoto: machinePhotos[index] ? machinePhotos[index].originFileObj : null
        }));

        console.log('Form Data:', formData);

        // Make API call to create equipment
        createEquipment(formData)
            .then(response => {
                message.success('Machines added successfully!');
                form.resetFields();
                setMachinePhotos({});
            })
            .catch(error => {
                message.error('Failed to add machines');
            });
    };

    return (
        <div className='AddMachine'>
            <Title level={2}>Enter Machine Details</Title>
            <Form form={form} layout='vertical' onFinish={handleSubmit}>
                <Form.List name='machines'>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <div key={key} className='machineFormSection'>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'machineName']}
                                        fieldKey={[fieldKey, 'machineName']}
                                        label='Machine Name'
                                        rules={[{ required: true, message: 'Please enter the machine name' }]}
                                    >
                                        <Input placeholder='Machine Name' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'category']}
                                        fieldKey={[fieldKey, 'category']}
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
                                        {...restField}
                                        name={[name, 'modelMake']}
                                        fieldKey={[fieldKey, 'modelMake']}
                                        label='Model and Make'
                                        rules={[{ required: true, message: 'Please enter the model and make' }]}
                                    >
                                        <Input placeholder='Model and Make' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'yearOfPurchase']}
                                        fieldKey={[fieldKey, 'yearOfPurchase']}
                                        label='Year of Purchase'
                                        rules={[{ required: true, message: 'Please enter the year of purchase' }]}
                                    >
                                        <Input placeholder='Year of Purchase' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'specifications']}
                                        fieldKey={[fieldKey, 'specifications']}
                                        label='Specifications'
                                    >
                                        <Input placeholder='Specifications (if any)' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'condition']}
                                        fieldKey={[fieldKey, 'condition']}
                                        label='Condition'
                                        rules={[{ required: true, message: 'Please enter the condition' }]}
                                    >
                                        <Input placeholder='Condition' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'attachments']}
                                        fieldKey={[fieldKey, 'attachments']}
                                        label='Attachments/Accessories'
                                    >
                                        <Input placeholder='Attachments/Accessories (if needed)' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'machinePhoto']}
                                        fieldKey={[fieldKey, 'machinePhoto']}
                                        label='Machine Photo'
                                    >
                                        <Upload
                                            listType='picture'
                                            beforeUpload={() => false}
                                            onChange={info => handlePhotoChange(info, name)}
                                        >
                                            <Button icon={<UploadOutlined />}>Upload Machine Photo</Button>
                                        </Upload>
                                        {machinePhotos[name] && <img src={URL.createObjectURL(machinePhotos[name])} alt='Machine' className='machinePhotoPreview' />}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type='danger'
                                            icon={<MinusCircleOutlined />}
                                            onClick={() => remove(name)}
                                        >
                                            Remove Machine
                                        </Button>
                                    </Form.Item>
                                </div>
                            ))}
                            <Form.Item>
                                <Button
                                    type='dashed'
                                    onClick={() => add()}
                                    icon={<PlusOutlined />}
                                >
                                    Add Machine
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Submit All Machines
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddMachine;
