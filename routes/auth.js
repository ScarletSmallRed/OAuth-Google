const router = require('express').Router();
const authControllers = require("./../controllers/auth")
const passport = require('passport');

router.get("/login", authControllers.login)
router.get("/logout", authControllers.logout)
router.get("/google", authControllers.google)
router.get("/google/redirect", passport.authenticate('google', {failWithError: true}), authControllers.google_redirect)

module.exports = router