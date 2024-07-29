const express = require('express');
const router = express.Router();
const jobAssignmentController = require('../controllers/jobAssignmentController');

router.post('/create', jobAssignmentController.createJobAssignment);
router.get('/getAll', jobAssignmentController.getAllJobAssignments);
router.get('/get/:id', jobAssignmentController.getJobAssignmentById);
router.get('/getByJobId/:jobId', jobAssignmentController.getJobAssignmentsByJobId); 
router.get('/getByWorkerId/:workerId', jobAssignmentController.getJobAssignmentsByWorkerId); // New route
router.put('/update/:id', jobAssignmentController.updateJobAssignment);
router.delete('/delete/:id', jobAssignmentController.deleteJobAssignment);

module.exports = router;
