import React, { useState } from 'react';
import {CircularProgress, TextField} from '@material-ui/core';

import './App.css';

function App() {
  const [country, setCountry] = useState({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
    

      const summer = (evt) => {
    
     if (evt.key === "Enter") {
       setLoading(true);
  fetch(`http://api.weatherapi.com/v1/current.json?key=46f47eb6913b4a04b70121734200909&q=${query}`)
  .then(response => response.json())
  .then(response => { setCountry(response);
  setQuery(""); setLoading(false);
   })
  
  }}

  


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
    
    <div>
    
    <center>

      <TextField id="outlined-search" label="Search..." 
       type="search" variant="outlined"   value={query} 
       onChange={event => setQuery(event.target.value)}
        onKeyPress={summer} autoComplete="country-name" style={{ margin: 30 }} />
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
  <div className="time">
  {country.location.localtime}
  </div>
      <div className="temp">
  {Math.round(country.current.temp_c)}°C 
      </div>
  <div className="text">
  {country.current.condition.text}

  <img src={country.current.condition.icon}/>
  </div>
  </div>
  
    ) : ("") }
  </main>
    </div>
    </React.Fragment>
  );
}

export default App;
