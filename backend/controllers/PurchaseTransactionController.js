// controllers/PurchaseTransactionController.js
const PurchaseTransaction = require('../models/PurchaseTransaction');

exports.createPurchaseTransaction = async (req, res) => {
    try {
        const newTransaction = new PurchaseTransaction(req.body);
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPurchaseTransactions = async (req, res) => {
    try {
        const transactions = await PurchaseTransaction.find().populate('equipmentId').populate('buyerId');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPurchaseTransactionById = async (req, res) => {
    try {
        const transaction = await PurchaseTransaction.findById(req.params.id).populate('equipmentId').populate('buyerId');
        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Purchase transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePurchaseTransaction = async (req, res) => {
    try {
        const updatedTransaction = await PurchaseTransaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePurchaseTransaction = async (req, res) => {
    try {
        await PurchaseTransaction.findByIdAndDelete(req.params.id);
        res.json({ message: 'Purchase transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
