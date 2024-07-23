const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobAssignmentSchema = new Schema({
    workerId: {
        type: Schema.Types.ObjectId,
        ref: 'LabourWorker',
        required: true
    },
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    assignmentDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JobAssignment', jobAssignmentSchema);
