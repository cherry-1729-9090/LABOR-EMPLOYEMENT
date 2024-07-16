const express = require('express');
const router = express.Router();
const labourWorkerController = require('../controllers/labourWorkerController');

router.post('/', labourWorkerController.createLabourWorker);
router.get('/', labourWorkerController.getAllLabourWorkers);
router.get('/get/:id', labourWorkerController.getLabourWorkerById);
router.put('/:id', labourWorkerController.updateLabourWorker);
router.delete('/:id', labourWorkerController.deleteLabourWorker);

module.exports = router;
