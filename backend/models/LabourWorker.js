// models/LabourWorker.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labourWorkerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  workerImage: { type: String, required: true }
});

const LabourWorker = mongoose.model('LabourWorker', labourWorkerSchema);

module.exports = LabourWorker;
