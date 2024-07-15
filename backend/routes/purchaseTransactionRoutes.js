const express = require('express');
const router = express.Router();
const purchaseTransactionController = require('../controllers/PurchaseTransactionController');

router.post('/', purchaseTransactionController.createPurchaseTransaction);
router.get('/', purchaseTransactionController.getAllPurchaseTransactions);
router.get('/:id', purchaseTransactionController.getPurchaseTransactionById);
router.put('/:id', purchaseTransactionController.updatePurchaseTransaction);
router.delete('/:id', purchaseTransactionController.deletePurchaseTransaction);

module.exports = router;
