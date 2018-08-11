const router = require('express').Router();
const profileControllers = require("./../controllers/profile")

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, profileControllers.get_profile);

module.exports = router;