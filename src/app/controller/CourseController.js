const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');
const { mongoosesToObject } = require('../../until/mongoose');

class CourseController {
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.render('courses/show', {course: mongoosesToObject(course)})
      })
      .catch(next);
  }
}
module.exports = new CourseController();
