import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3500/api', // Replace with your API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export { axiosInstance };
