// models/PurchaseTransaction.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseTransactionSchema = new Schema({
  equipmentId: { type: Schema.Types.ObjectId, ref: 'Equipment', required: true },
  buyerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  totalPrice: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  status: { type: String, required: true, enum: ['pending', 'completed', 'cancelled'] }
});

const PurchaseTransaction = mongoose.model('PurchaseTransaction', purchaseTransactionSchema);

module.exports = PurchaseTransaction;
