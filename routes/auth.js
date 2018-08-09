const router = require('express').Router();
const authControllers = require("./../controllers/auth")

router.get("/login", authControllers.login)
router.get("/logout", authControllers.logout)
router.get("/google", authControllers.google)

module.exports = router