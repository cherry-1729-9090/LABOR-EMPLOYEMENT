const JobAssignment = require('../models/JobAssignment');

exports.createJobAssignment = async (req, res) => {
    try {
        const jobAssignment = new JobAssignment(req.body);
        await jobAssignment.save();
        res.status(201).json(jobAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllJobAssignments = async (req, res) => {
    try {
        const jobAssignments = await JobAssignment.find()
            .populate('workerId')
            .populate('jobId');
        res.status(200).json(jobAssignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getJobAssignmentById = async (req, res) => {
    try {
        const jobAssignment = await JobAssignment.findById(req.params.id)
            .populate('workerId')
            .populate('jobId');
        if (jobAssignment) {
            res.status(200).json(jobAssignment);
        } else {
            res.status(404).json({ message: 'Job assignment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateJobAssignment = async (req, res) => {
    try {
        const jobAssignment = await JobAssignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (jobAssignment) {
            res.status(200).json(jobAssignment);
        } else {
            res.status(404).json({ message: 'Job assignment not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteJobAssignment = async (req, res) => {
    try {
        const jobAssignment = await JobAssignment.findByIdAndDelete(req.params.id);
        if (jobAssignment) {
            res.status(200).json({ message: 'Job assignment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Job assignment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};