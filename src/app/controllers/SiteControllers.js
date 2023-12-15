const course = require('../models/node')
import { mutipleMongooseToObject } from '../../util/mongoose'
class SiteControllers {
    // get /home
    home(req, res, next) {
        // Course.find({})
        // .exec()
        // .then((courses) => {
        //     res.json(courses);
        // })
        // .catch((error) => {
        //     res.status(400).json({ error: error.message });
        // });

        course.find({})
        .then(courses => {
            res.render('home', {
            courses: mutipleMongooseToObject(courses)})
        })
        .catch(next)
          
    //     // res.render('home');
    }
    // got /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteControllers;