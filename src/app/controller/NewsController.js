class NewsControlller {
  // [get] news
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('newdetail');
  }
}
module.exports = new NewsControlller();
