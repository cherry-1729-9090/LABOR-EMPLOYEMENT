import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

function ProjectDetailsForm() {
    const [projectName, setProjectName] = useState('');
    const [numberOfEmployees, setNumberOfEmployees] = useState('');
    const [totalAmountSpent, setTotalAmountSpent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ projectName, numberOfEmployees, totalAmountSpent });
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Project Details Entry
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Project Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <Box border={1} borderColor="grey.300" padding={2} marginBottom={2}>
                        <Typography variant="body2">Photos of Project Site</Typography>
                        {/* Implement file upload logic here */}
                    </Box>
                    <TextField
                        label="Number of Employees Required"
                        type="number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={numberOfEmployees}
                        onChange={(e) => setNumberOfEmployees(e.target.value)}
                    />
                    <TextField
                        label="Total Amount Spent"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={totalAmountSpent}
                        onChange={(e) => setTotalAmountSpent(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                        Save Project Details
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default ProjectDetailsForm;
