const Vehicles = require('../models/vehicles')
const parkingCtrl = {};

parkingCtrl.getVehicles = async (req, res)=>{
    try {
        const vehicles = await Vehicles.find({})
        if (!vehicles) {
            res.status(404).json({
                message: 'Not vehicles parked'
            })
        }
        res.status(200).send(vehicles)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

parkingCtrl.addVehicle = async (req, res)=>{
    const {client_name, vehicle, plate, vehicle_type} = req.body;
    try {
        const alreadyParked = await Vehicles.findOne({plate})

        if(alreadyParked){
            return res.status(400).json({message: 'The vehicle is already parked'})
        }

        const newVehicle = new Vehicles({
            client_name,
            vehicle,
            plate,
            vehicle_type,
        })

        await newVehicle.save()

        res.status(201).send(`The ${vehicle_type} has been parked`)
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error})
    }
}

parkingCtrl.exitVehicle = async (req, res)=>{
    try {
        const id = req.params.id
        const deleted_vehicle = await Vehicles.findByIdAndDelete(id);

        if (!deleted_vehicle) {
            res.status(404).json({message: 'Vehicle not found'})
        }

        res.status(200).json({
            message: 'The vehicle is no longer parked',
            client: deleted_vehicle.client_name,
        });
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error})
        
    }
}

module.exports = parkingCtrl;