const axiosInstance = require('./axiosInstance');

export const createWorker = async (workerData) => {
    try {
        const response = await axiosInstance.post('/workers/create', workerData);
        return response.data;
    } catch (error) {
        console.error('Error creating worker:', error);
        return null;
    }
}

export const getWorkerById = async (workerId) => {
    try {
        const response = await axiosInstance.get(`/workers/get/${workerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching worker by ID:', error);
        return null;
    }
}

export const updateWorker = async (workerId, workerData) => {
    try {
        const response = await axiosInstance.put(`/workers/update/${workerId}`, workerData);
        return response.data;
    } catch (error) {
        console.error('Error updating worker:', error);
        return null;
    }
}
