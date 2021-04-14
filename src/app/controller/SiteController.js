const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');
class SiteController {
  // [get] news
  home(req, res, next) {
    // res.render('home');
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: multipleMongooseToObject(courses)
      });
      })
      .catch(next);
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
