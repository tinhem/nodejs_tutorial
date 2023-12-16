const course = require('../models/node')
const { mutipleMongooseToObject } = require('../../util/mongoose');
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
            courses = courses.map(course => course.toObject())
            res.render('home', {courses})
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