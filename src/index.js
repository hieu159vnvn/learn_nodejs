const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { extname } = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
//connect monggoDB
const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
// use body
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// logger
// app.use(morgan('combined'));
//template engine
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//route
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
