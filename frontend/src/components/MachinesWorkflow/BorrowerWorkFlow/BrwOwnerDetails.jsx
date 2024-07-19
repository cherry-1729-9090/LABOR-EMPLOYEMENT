import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, Spin, Alert } from 'antd';
import './BrwOwner.css';
import { useAppContext } from '../../GlobalContext';
import { getUserById } from '../../../calls/userCalls';

const { Title, Paragraph } = Typography;

function BrwOwnerDetails() {
    const { MachineOwnerId } = useAppContext();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserById(MachineOwnerId);
                setData(response);
            } catch (error) {
                setError('Failed to fetch owner details.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <Alert message="Error" description={error} type="error" />;
    }

    return (
        <div className='BrwOwnerDetails'>
            <Title level={1}>Owner Details</Title>
            {data ? (
                <Card
                    bordered={false}
                    style={{ maxWidth: 600, margin: '0 auto' }}
                >
                    <Title level={3}>Owner Information</Title>
                    <Paragraph><strong>Name:</strong> {data.firstName} {data.lastName}</Paragraph>
                    <Paragraph><strong>Mobile Number:</strong> {data.phone}</Paragraph>
                    <Paragraph><strong>Location:</strong> {data.location}</Paragraph>
                    <Button type="primary">Contact Owner</Button>
                </Card>
            ) : (
                <Paragraph>No data available.</Paragraph>
            )}
        </div>
    );
}

export default BrwOwnerDetails;
