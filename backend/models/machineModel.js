const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
    machineId: {
        type: String,
        required: true
    },
    machineName: {
        type: String,
        required: true
    },
    mRentalPrice: {
        type: Number,
        required: true
    },
    mAvailability: {
        type: Boolean,
        required: true
    },
    mPostedby: {
        type: String,
        required: true
    },
    mSalesprice: {
        type: Number,
        required: true
    },
    mRatings: {
        type: Number,
        required: true
    },
    mDescription: {
        type: String,
        required: true
    },
    mType: {
        type: String,
        enum: ['Type1', 'Type2', 'Type3'], 
        required: true
    }
});

const machineModel = mongoose.model('Machine', machineSchema);

export default machineModel;