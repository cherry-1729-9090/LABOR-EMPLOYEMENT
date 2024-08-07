// models/Equipment.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    name: { type: String, required: true },
    rentalPrice: { type: Number, required: true },
    availabilityStatus: { type: String, required: true, enum: ['available', 'unavailable'] },
    postedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    salePrice: { type: Number },
    ratings: { type: Number },
    description: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    images: [{ type: String }], // Updated to handle multiple image URLs
    specifications: { type: String, required: true },
    attachments: { type: String, required: true },
    depositRequired: { type: Number, required: true },
    yearOfManufacture: { type: String, required: true },
    modelAndMake: { type: String, required: true },
    category: { type: String, required: true },
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
