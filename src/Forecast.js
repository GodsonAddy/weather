import React, {useState} from 'react';
import { CircularProgress, Grid, Typography} from '@material-ui/core';
import {Card, CardMedia, CardContent, CardHeader, TextField} from '@material-ui/core';
import './App.css';
require("dotenv").config();


const Forecast = () => {
  
  const [country, setCountry] = useState({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
    

  const summer = (evt) => {
    
    if (evt.key === "Enter") {
     setLoading(true);
     fetch(`//api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${query}&days=${10}`)
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
    <div>
      <div className={
          (typeof country.location != "undefined") ? 
          ((country.current.is_day === 0) 
          ? "app night"
          : "app")
          : "app"
        }>
        <main>
          <div className="body">
            <center >     
              <TextField  value={query} onChange={handleChange} onKeyPress={summer} 
                id="outlined-search" label="Search..." type="search" variant="outlined"
                autoComplete="true"
              />
            </center>
           
            <div className="circular">
              {loading && <CircularProgress color="secondary" />}
            </div>
          </div>
          <br /> 
          {(typeof country.location != "undefined") ? (
          
            <div>         
              <Grid container spacing={5} direction="row" justify="space-around"
                alignItems="center" alignContent="center">
                <Grid item xl={4}>
                  <Card>
                    <CardHeader
                      title={country.forecast.forecastday[0].date}
                    />
                    <CardMedia>
                    <img src={country.forecast.forecastday[0].day.condition.icon} alt="" />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h5">
                        {country.forecast.forecastday[0].day.maxtemp_c}°C
                      </Typography>
                      <Typography variant="h6">
                        {country.forecast.forecastday[0].day.condition.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xl={4}>
                  <Card>
                    <CardHeader
                      title={country.forecast.forecastday[1].date}
                    />
                    <CardMedia>
                    <img src={country.forecast.forecastday[1].day.condition.icon} alt="" />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h5">
                        {country.forecast.forecastday[1].day.maxtemp_c}°C
                      </Typography>
                      <Typography variant="h6">
                        {country.forecast.forecastday[1].day.condition.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={4}>
                  <Card>
                    <CardHeader
                      title={country.forecast.forecastday[2].date}
                    />
                    <CardMedia>
                    <img src={country.forecast.forecastday[2].day.condition.icon} alt="" />
                    </CardMedia>
                    <CardContent spacing={3}>
                      <Typography variant="h5">
                      {country.forecast.forecastday[2].day.maxtemp_c}°C
                      </Typography>
                      <Typography variant="h6">
                        {country.forecast.forecastday[2].day.condition.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
                
          ) : ('') 
          }
        </main>        
      </div>
    </div>
  )
}

export default Forecast;
