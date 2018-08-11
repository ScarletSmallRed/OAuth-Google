const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require("./../models/user-model")

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
        console.log("deserialize user:", user)
    });
});

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
        User.findOne({googleId: profile.id})
            .then(currentUser => {
                if (currentUser) {
                    console.log("current user:", currentUser)
                    done(null, currentUser)
                } else {
                    new User({
                        googleId: profile.id,
                        userName: profile.displayName,
                        thumbnail: profile._json.image.url
                    }).save()
                        .then(user => {
                            console.log("New user created:", user)
                            done(null, user)
                        })
                        .catch(err => {
                            throw err
                        })
                }
            })
    })
);