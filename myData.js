var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  value: {
    type: String,
    required: true
  }
  
});

weatherSchema.path('_id');
var Weather = mongoose.model("Weather", weatherSchema);

var findWeatherByCountry = function( done) {
  Weather.find({value:1}).limit(5).exec(function(err,data){
    if(err) return console.log(err);
      done(null, data);
  });
};

weatherSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

weatherSchema.set("autoIndex", false);

exports.WeatherModel = Weather;
exports.findWeatherByCountry = findWeatherByCountry;