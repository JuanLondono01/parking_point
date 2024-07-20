const {Router} = require("express")
const router = Router()

router.route("/api/v_pesados")
    .get()
    .post()

router.route("/api/p_pesados/:id")
    .delete()

module.exports = router