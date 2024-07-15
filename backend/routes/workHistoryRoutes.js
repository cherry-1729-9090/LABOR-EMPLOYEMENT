const express = require('express');
const router = express.Router();
const workHistoryController = require('../controllers/workHistoryController');

router.post('/', workHistoryController.createWorkHistory);
router.get('/', workHistoryController.getAllWorkHistories);
router.get('/:id', workHistoryController.getWorkHistoryById);
router.put('/:id', workHistoryController.updateWorkHistory);
router.delete('/:id', workHistoryController.deleteWorkHistory);

module.exports = router;
