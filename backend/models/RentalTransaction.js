// models/RentalTransaction.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalTransactionSchema = new Schema({
  equipmentId: { type: Schema.Types.ObjectId, ref: 'Equipment', required: true },
  renterId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rentalStartDate: { type: Date, required: true },
  rentalEndDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true, enum: ['pending', 'active', 'completed', 'cancelled'] }
});

const RentalTransaction = mongoose.model('RentalTransaction', rentalTransactionSchema);

module.exports = RentalTransaction;
