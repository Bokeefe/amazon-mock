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
    process.env.DATABASE, {
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


// routes

const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');

const productRoutes = require('./routes/product');

app.use('/api', categoryRoutes);
app.use('/api', ownerRoutes);
app.use('/api', productRoutes);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("listening on port:", port);
    }
});