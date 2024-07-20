const {Router} = require("express")
const router = Router()

router.route("/api/motos")
    .get()
    .post()

router.route("/api/motos/:id")
    .delete()

module.exports = router