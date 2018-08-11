const express = require('express')
const authRoutes = require("./routes/auth")
const profileRoutes = require("./routes/profile")
const morgan = require("morgan")
const cookieSession = require("cookie-session")
const keys = require("./config/keys")
const passport = require("passport")
require('./config/passport-setup')
require("./config/db-setup")

const app = express()

// set view engine
app.set('view engine', 'ejs')

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

app.use(morgan('dev'))
app.use("/auth", authRoutes)
app.use("/profile", profileRoutes)
// create home route
app.get('/', (req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000')
});