import { axiosInstance } from "./axiosInstance";

export const getLabourWorkerByUserId = async (userId) => {
    try {
        const response = await axiosInstance.get(`/workers/getByUserId/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching labour worker by user ID:', error);
        return null;
    }
}
export const createLabourWorker = async (labourWorker) => {
    try {
        const response = await axiosInstance.post('/workers/create', labourWorker);
        return response.data;
    } catch (error) {
        console.error('Error creating labour worker:', error);
        return null;
    }
}

export const getLabourWorkerById = async (labourWorkerId) => {
    try {
        const response = await axiosInstance.get(`/workers/get/${labourWorkerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching labour worker by ID:', error);
        return null;
    }
}


export const updateLabourWorker = async (labourWorkerId, labourWorkerData) => {
    try {
        const response = await axiosInstance.put(`/workers/update/${labourWorkerId}`, labourWorkerData);
        return response.data;
    } catch (error) {
        console.error('Error updating labour worker:', error);
        return null;
    }
}
