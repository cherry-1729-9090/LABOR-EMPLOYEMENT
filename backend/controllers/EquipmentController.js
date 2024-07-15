// controllers/EquipmentController.js
const Equipment = require('../models/Equipment');

exports.createEquipment = async (req, res) => {
    try {
        const newEquipment = new Equipment(req.body);
        await newEquipment.save();
        res.status(201).json(newEquipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.find().populate('postedBy');
        res.json(equipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEquipmentById = async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id).populate('postedBy');
        if (equipment) {
            res.json(equipment);
        } else {
            res.status(404).json({ message: 'Equipment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEquipment = async (req, res) => {
    try {
        const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEquipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEquipment = async (req, res) => {
    try {
        await Equipment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Equipment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
