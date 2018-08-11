const mongoose = require("mongoose")
const keys = require("./keys")

mongoose.connect(
    keys.mongoDB.dbURI,
    {
        useNewUrlParser: true
    }
)