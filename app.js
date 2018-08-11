const express = require('express')
const authRoutes = require("./routes/auth")
const morgan = require("morgan")
require('./config/passport-setup')

const app = express()

// set view engine
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use("/auth", authRoutes)

// create home route
app.get('/', (req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000')
});