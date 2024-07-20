const {Router} = require("express")
const router = Router()

router.route("/api/autos")
    .get()
    .post()

router.route("/api/autos/:id")
    .delete()

module.exports = router