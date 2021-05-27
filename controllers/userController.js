const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  findAll: async (req, res) => {
    const users = await db.User.findAll();
    res.json(users);
  },
  register: async (req, res) => {
    const { user, email, password } = req.body;

    const emailAlready = await db.User.findOne({ where: { email: email } });
    if (emailAlready) {
      return res.send("email already exist");
    }

    const userr = await db.User.create({
      user: user,
      email: email,
      password: password,
    });
    res.json(userr);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email: email } });
    if (!user) {
      return res.send("email not found");
    }
    if (user.password !== password) {
      return res.send("password salah");
    }
    const payload = {
      id: user.id,
      email: user.email,
    };
    const signatureKey = "initokenrahasiatidakadayangbolehtahu";
    const jwtToken = jwt.sign(payload, signatureKey);
    res.cookie("jwt", jwtToken, { maxAge: 900000, httpOnly: true });
    res.redirect("/")
  },
  logout: (req, res)=> {
    res.cookie("jwt", "haha", {
      httpOnly: true,
      secure: true,
      maxAge: -1,
    });
    res.redirect("/");
  },
  dashboard: (req, res) => {
    res.send("ini rahasia");
  },
};
