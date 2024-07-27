const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobAssignmentSchema = new Schema({
    worker: {
        type: Schema.Types.ObjectId,
        ref: 'LabourWorker',
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
    },
    assignmentDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JobAssignment', jobAssignmentSchema);
