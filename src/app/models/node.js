const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const course = new Schema({
    name: {type: String, maxLenght: 255},
    descripsion: {type: String, maxLenght: 600},
    img: {type: String, maxLenght: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('course', course);

