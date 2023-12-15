const mongoose = require('mongoose')
module.exports = {
    mutipleMongooseToObject: funtion (mongooses) {
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseToOject: funtion(mongoose) {
        return mongoose ? mongoose.toObject(): mongoose;
    }
}