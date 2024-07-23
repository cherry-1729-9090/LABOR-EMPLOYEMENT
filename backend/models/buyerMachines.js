const mongoose = require('mongoose');

const buyerMachine = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    machineName: { type: String, required: true },
    machineType: { type: String, required: true },
    machineModel: { type: String, required: true },
    machineYear: { type: String, required: true },
    machineCondition: { type: String, required: true },
    machineLocation: { type: String, required: true },
    machinePrice: { type: Number, required: true },
    machineImage: { type: String, required: true },
    machineDescription: { type: String, required: true },
    
});