const express = require('express');
const router = express.Router();
const jobController = require('../controllers/JobController');

router.post('/create', jobController.createJob);
router.get('/getAllJobs', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.put('/update/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);
router.get('/posted-by/:id', jobController.getJobByPostedById);

module.exports = router;
