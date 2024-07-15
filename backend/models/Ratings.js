// models/Ratings.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  ratedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  targetType: { type: String, required: true, enum: ['contractor', 'labour_worker', 'equipment'] },
  targetId: { type: Schema.Types.ObjectId, required: true, refPath: 'targetType' },
  rating: { type: Number, required: true },
  ratingDate: { type: Date, required: true },
  review: { type: String }
});

const Ratings = mongoose.model('Ratings', ratingSchema);

module.exports = Ratings;
