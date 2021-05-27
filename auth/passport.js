const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
const { User } = require("../models");

const options = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "initokenrahasiatidakadayangbolehtahu",
};

passport.use(new JwtStrategy(options, (payload, done) => {
  User.findOne({ where: { id: payload.id } })
    .then((user) => done(null, user))
    .catch((err) => done(err, false));
}));

module.exports = passport