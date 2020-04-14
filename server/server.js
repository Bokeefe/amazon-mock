const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.join(__dirname, ".env"),
});
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const port = 3000;

// models
const User = require("./models/user");

mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) throw err;
  }
);

const app = express();
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.json("hello there");
});

app.post("/", (req, res) => {
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json("successful user save");
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on port:", port);
  }
});
