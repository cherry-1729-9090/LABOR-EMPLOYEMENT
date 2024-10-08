import { axiosInstance } from "./axiosInstance";

export const getJobs = async () => {
    try {
        const response = await axiosInstance.get('/jobs/getAllJobs');
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
}

export const getJobsByPostedById = async (postedById) => {
    try {
        const response = await axiosInstance.get(`/jobs/posted-by/${postedById}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs by postedBy:', error);
        return [];
    }
}

export const createJob = async (job) => {
    try {
        const response = await axiosInstance.post('/jobs/create', job);
        return response.data;
    } catch (error) {
        console.error('Error creating job:', error);
        return null;
    }
}

export const updateJob = async (jobId, job) => {
    console.log('jobId:', jobId);
    console.log('job data:', job);
    try {
        const response = await axiosInstance.put(`/jobs/update/${jobId}`, job);
        return response.data;
    } catch (error) {
        console.error('Error updating job:', error.response ? error.response.data : error.message);
        return null;
    }
}

export const deleteJob = async (jobId) => {
    try {
        const response = await axiosInstance.delete(`/jobs/${jobId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting job:', error);
        return null;
    }
}
