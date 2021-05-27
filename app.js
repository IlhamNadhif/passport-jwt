const path = require('path');
const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
const port = 3000

const passport = require("./auth/passport")
app.use(passport.initialize())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/", require("./routes/frontend"));
app.use("/api", require("./routes/user"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})