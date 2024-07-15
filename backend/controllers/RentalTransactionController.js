const RentalTransaction = require('../models/RentalTransaction')

exports.createRentalTransaction = async (req, res) => {
    try {
        const newTransaction = new RentalTransaction({
            equipmentId: req.body.equipmentId,
            renterId: req.body.renterId,
            rentalStartDate: req.body.rentalStartDate,
            rentalEndDate: req.body.rentalEndDate,
            totalPrice: req.body.totalPrice,
            status: req.body.status
        });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllRentalTransactions = async (req, res) => {
    try {
        const transactions = await RentalTransaction.find()
                                                   .populate('equipmentId')
                                                   .populate('renterId');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentalTransactionById = async (req, res) => {
    try {
        const transaction = await RentalTransaction.findById(req.params.id)
                                                   .populate('equipmentId')
                                                   .populate('renterId');
        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Rental transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRentalTransaction = async (req, res) => {
    try {
        const updatedTransaction = await RentalTransaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRentalTransaction = async (req, res) => {
    try {
        await RentalTransaction.findByIdAndDelete(req.params.id);
        res.json({ message: 'Rental transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
