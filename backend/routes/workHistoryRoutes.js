const express = require('express');
const router = express.Router();
const workHistoryController = require('../controllers/WorkHistoryController');

router.post('/', workHistoryController.createWorkHistory);
router.get('/', workHistoryController.getAllWorkHistories);
router.get('/:id', workHistoryController.getWorkHistoryById);
router.put('/:id', workHistoryController.updateWorkHistory);
router.delete('/:id', workHistoryController.deleteWorkHistory);
router.get('/employee/:employeeId', workHistoryController.getWorkHistoryByEmployeeId);

module.exports = router;
