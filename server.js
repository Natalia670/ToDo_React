// Imports
const express = require('express');
const webRoutes = require('./routes/web');
const cors = require('cors');


// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');
app.use(cors());
// View engine configs
const exphbs = require('express-handlebars');
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();
const extNameHbs = 'hbs';
const hbs = exphbs.create({
  extname: extNameHbs,
  helpers: multihelpers
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);
app.use(express.static('public'));

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Sobreescribe el método de envío
let methodOverride = require('method-override')
// sobreescribe el método POST
app.use(methodOverride('_method'))



// Routes
app.use('/', webRoutes);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);



// App init
app.listen(appConfig.expressPort, () => {
  console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});
