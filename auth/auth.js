const { use } = require("../routes/frontend");
const passport = require("./passport");
var jwt = require('jsonwebtoken');

const __export = (req, res, next) => {
  const userToken = req.cookies.jwt;
  /* if (userToken) {
        passport.authenticate('jwt', {
            session: false
        });
        next();
    } else {
        return res.redirect('/login');
    } */
  jwt.verify(userToken, "initokenrahasiatidakadayangbolehtahu", function (err, decoded) {
    if (err) {
        return res.redirect('/login');
    } else {
        next()
    }
  });
};

module.exports = __export;
