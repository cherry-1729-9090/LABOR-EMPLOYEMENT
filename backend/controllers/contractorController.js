// controllers/contractorController.js
const Contractor = require('../models/Contractor');

exports.createContractor = async (req, res) => {
    try {
        const contractor = new Contractor(req.body);
        await contractor.save();
        res.status(201).json(contractor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllContractors = async (req, res) => {
    try {
        const contractors = await Contractor.find();
        res.status(200).json(contractors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getContractorById = async (req, res) => {
    try {
        const contractor = await Contractor.findById(req.params.id);
        if (!contractor) {
            res.status(404).json({ message: 'Contractor not found' });
        } else {
            res.status(200).json(contractor);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateContractor = async (req, res) => {
    try {
        const contractor = await Contractor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!contractor) {
            res.status(404).json({ message: 'Contractor not found' });
        } else {
            res.status(200).json(contractor);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteContractor = async (req, res) => {
    try {
        const contractor = await Contractor.findByIdAndDelete(req.params.id);
        if (!contractor) {
            res.status(404).json({ message: 'Contractor not found' });
        } else {
            res.status(200).json({ message: 'Contractor deleted' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
