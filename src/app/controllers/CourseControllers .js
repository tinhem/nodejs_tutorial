const course = require('../models/node')
const { mongooseToObject } = require('../../util/mongoose');
class CourseControllers {

    show(req, res, next) {
        course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
         req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
         const Course = new course(req.body);
         Course.save();
        
    }
}

module.exports = new CourseControllers;