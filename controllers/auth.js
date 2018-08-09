exports.login = (req, res) => {
    res.render('login', { user: req.user });
}

exports.logout = (req, res) => {
    // handle with passport
    res.send('logging out');
}

exports.google = (req, res) => {
    // handle with passport
    res.send('logging in with Google');
}