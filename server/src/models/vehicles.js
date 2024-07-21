const mongoose = require('mongoose');
const adjustDateToColombia = require('../middlewares/adjustDate');

const vehiclesSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: false,
    },
    client_name: {
        type: String,
        required: true,
    },
    vehicle: {
        type: String,
        required: true,
    },
    plate: {
        type: String,
        required: true,
    },
    vehicle_type: {
        type: String,
        required: true,
    },
});

vehiclesSchema.pre('save', adjustDateToColombia);


const Vehicles = mongoose.model('Vehicles', vehiclesSchema);

module.exports = Vehicles;
