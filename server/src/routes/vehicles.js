const {Router} = require("express")
const {getVehicles, addVehicle, exitVehicle} = require('../controllers/parking.controller')
const router = Router()

router.route("/api")
    .get(getVehicles)
    .post(addVehicle)

router.route("/api/:id")
    .delete(exitVehicle)

module.exports = router