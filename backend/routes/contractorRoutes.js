const express = require('express');
const router = express.Router();
const contractorController = require('../controllers/contractorController');

router.post('/create', contractorController.createContractor);
router.get('/getAll', contractorController.getAllContractors);
router.get('/get/:id', contractorController.getContractorById);
router.get('/getByUserId', contractorController.getContractorByUserId); // New route
router.put('/update/:id', contractorController.updateContractor);
router.delete('/delete/:id', contractorController.deleteContractor);

module.exports = router;
