import React, { useState } from 'react';
import { CircularProgress,TextField} from '@material-ui/core';
import './App.css';
require("dotenv").config();

function CurrentWeather() {
  const [country, setCountry] = useState({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const summer = (evt) => {
    
    if (evt.key === "Enter") {
      setLoading(true);
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${query}&days=${10}`)
      .then(res => res.json())
      .then(res=> { 
        setCountry(res);
        setQuery(""); 
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
    
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (  
    <React.Fragment>
      <div className={
        (typeof country.location != "undefined") ? 
        ((country.current.is_day === 0) 
        ? "app night"
        : "app")
        : "app"
        }>
        <main>
          <div className="body"> 
            <center>     
              <TextField  value={query} onChange={handleChange} onKeyPress={summer} 
                id="outlined-search" label="Search..." type="search" variant="outlined"
                autoComplete
              />
            </center>    
          </div>
          <div className="circular">
            {loading && <CircularProgress color="secondary" />}
          </div>

          {(typeof country.location != "undefined") ? (
        
            <div>
              <div className="state">
                {country.location.name}, {country.location.region}, {country.location.country}
              </div>
              <div className="temp">
                <img src={country.current.condition.icon} alt="" /> 
                {country.current.temp_c}°C
              </div>
              <div className="text">
              {country.current.condition.text}
              </div>
              <div className="time">
                Last updated: {country.current.last_updated}
              </div>
              <div className="text">
                Feels like {country.current.feelslike_c}°C    
                Wind {country.current.wind_kph}Km/h 
                Visibility {country.current.vis_km}Km
              </div>
              <div className="text">
                Barometer {country.current.pressure_mb}mb     
                Humidity {country.current.humidity}% 
              </div>
            </div>
           ) : ('') 
          }        
        </main>
      </div>
            
    </React.Fragment>
  )
}

export default CurrentWeather;

