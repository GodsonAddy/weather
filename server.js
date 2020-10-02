var express = require('express');
var app = express();
try{
  var mongoose = require('mongoose');
} catch (e) {
  console.log(e);
};
var router = express.Router();
const cors = require("cors");
require("dotenv").config();


app.use(express.urlencoded({extended: 'false'}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
const timeout = 1000;

var Weather = require('./myData.js').WeatherModel;
router.use(function(req, res, next) {
    if(req.method !== 'OPTIONS' && Weather.modelName !== 'Weather') {
      return next({message: 'Weather Model is not correct'});
    }
    next();
});
  
var findWeather = require('./myData.js').findWeatherByCountry;
router.post('/', function(req, res, next) {
  var t = setTimeout(() => { next({message: 'timeout'}) }, timeout);
  Weather.remove({}, function(err) {
    if(err) { return next(err) }
    Weather.create(req.body, function(err, pers) {
      if(err) { return next(err) }
      try {
        findWeather(function(err, data) {
          clearTimeout(t);
          if(err) { return next(err) }
          if (!data) {
            console.log('Missing `done()` argument');
            return next({ message: 'Missing callback argument' });
          }
          res.json(data);
        });
      } catch (e) {
        console.log(e);
        return next(e);
      }
    });
  })
});



const port = 5000;

app.listen(port);
