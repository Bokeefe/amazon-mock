const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
    about: String,
    title: String,
    photo: String
})

module.exports = mongoose.model("Owner", OwnerSchema)