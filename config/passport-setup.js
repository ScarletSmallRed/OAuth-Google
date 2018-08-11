const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require("./../models/user-model")

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        new User({
            googleId: profile.id,
            username: profile.displayName
        }).save()
            .then(user => {
                console.log("New user created:", user)
            })
            .catch(err => {
                throw err
            })
    })
);