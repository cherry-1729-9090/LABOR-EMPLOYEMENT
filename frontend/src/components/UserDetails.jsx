import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../calls/userCalls';
import { useAppContext } from './GlobalContext';
import axios from 'axios';

function UserDetails() {
  const { mobileNumber, userId } = useAppContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    const fetchLocation = async (latitude, longitude) => {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
          params: {
            lat: latitude,
            lon: longitude,
            format: 'json'
          }
        });
        const address = response.data.display_name;
        form.setFieldsValue({ location: address });
      } catch (error) {
        console.error('Error fetching location:', error);
      } finally {
        setLoadingLocation(false);
      }
    };

    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoadingLocation(false);
        }
      );
    } else {
      message.error('Geolocation is not supported by this browser.');
    }
  }, [form]);

  const onFinish = async (values) => {
    try {
      const userDetails = { ...values, mobileNumber };

      const response = await updateUser(userId, userDetails);
      if (response) {
        message.success('Details saved successfully');
        navigate('/role-selection'); 
      } else {
        message.error('Failed to save details');
      }
    } catch (error) {
      console.error('Error saving user details:', error);
      message.error('Failed to save details');
    }
  };

  return (
    <Card title="User Details" style={{ width: '100vw', height: '100vh' }}>
      <Form
        form={form}
        layout="vertical"
        style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please enter your first name!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please enter your last name!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="mobileNumber"
          label="Mobile Number"
          initialValue={mobileNumber}
        >
          <Input placeholder="Mobile Number" disabled />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please enter your location!' }]}
        >
          <Input placeholder="Location" disabled={loadingLocation} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#FFC0CB', borderColor: '#FFC0CB' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default UserDetails;
