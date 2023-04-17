const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const login = require("./routes/login");
const signup = require("./routes/signup");
const bodyParser = require("body-parser");

app.use("/usersignin", login);
app.use("/usersignup", signup);
module.exports = app;
