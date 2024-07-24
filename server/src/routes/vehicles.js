const {Router} = require("express")
const {getVehicles, addVehicle, exitVehicle} = require('../controllers/parking.controller')
const router = Router()

router.route("/")
    .get(getVehicles)
    .post(addVehicle)

router.route("/:id")
    .delete(exitVehicle)

module.exports = router