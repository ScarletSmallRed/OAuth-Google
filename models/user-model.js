const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    googleId: String,
    thumbnail: String
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;