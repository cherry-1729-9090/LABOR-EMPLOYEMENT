import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://your-api-url.com/api', // Replace with your API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export { axiosInstance };
