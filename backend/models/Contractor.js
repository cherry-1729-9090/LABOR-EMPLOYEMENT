// models/Contractor.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true }
});

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
