const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const { extname } = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));
// logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));
//route
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})