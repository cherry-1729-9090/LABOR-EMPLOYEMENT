const mongoose = require('mongoose');
const Skills = require('./Skills');

const Schema = mongoose.Schema;

// Enum for user types
const userTypes = {
  LABOR_WORKER: "labor_worker",
  CONTRACTOR: "contractor",
  GENERAL: "general"
};

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  userType: { type: String, required: true, enum: Object.values(userTypes) },
  location: { type: String, required: true },
  token: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
