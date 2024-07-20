const mongoose = require('mongoose');

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

const Vehicles = mongoose.model('Vehicles', vehiclesSchema);

module.exports = Vehicles;
