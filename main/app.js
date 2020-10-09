var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const webRoutes = require('../routes/web');

var app = express();

const appConfig = require('../configs/app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRoutes);

/*app.listen(appConfig.expressPort, () => {
  console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});*/

module.exports = app;
