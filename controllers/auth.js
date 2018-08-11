const passport = require('passport');

exports.login = (req, res) => {
    res.render('login', { user: req.user });
}

exports.logout = (req, res) => {
    // handle with passport
    res.send('logging out');
}

exports.google = passport.authenticate('google', {
    scope: ['profile']
})

exports.google_redirect = (req, res) => {
    res.send('you reached the redirect URI');
}