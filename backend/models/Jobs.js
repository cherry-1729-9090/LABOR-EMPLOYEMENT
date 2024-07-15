// models/Jobs.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobType: { type: String, required: true },
  location: { type: String, required: true },
  payRate: { type: Number, required: true },
  postedBy: { type: Schema.Types.ObjectId, ref: 'Contractor', required: true },
  skillsRequired: { type: String, required: true },
  applicationDeadline: { type: Date, required: true }
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;
