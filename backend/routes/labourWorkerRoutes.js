const express = require('express');
const router = express.Router();
const labourWorkerController = require('../controllers/LabourWorkerController');

router.post('/create', labourWorkerController.createLabourWorker);
router.get('/getAll', labourWorkerController.getAllLabourWorkers);
router.get('/get/:id', labourWorkerController.getLabourWorkerById);
router.get('/getByUserId/:userId', labourWorkerController.getLabourWorkerByUserId); // New route
router.put('/update/:id', labourWorkerController.updateLabourWorker);
router.delete('/delete/:id', labourWorkerController.deleteLabourWorker);

module.exports = router;
