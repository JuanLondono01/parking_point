const {Router} = require("express")
const router = Router()

router.route("/api")
    .get()
    .post()

router.route("/api/:id")
    .delete()

module.exports = router