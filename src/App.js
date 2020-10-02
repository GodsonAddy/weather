import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WeatherApp from './WeatherApp';
import ForecastPage from './ForecastPage';


function App() {
 
  return (
    <div>
      <Switch>
        <Route exact path='/' component={WeatherApp} />
        <Route path="/forecast" component={ForecastPage} />
      </Switch>
    </div>
  );
}

export default App;
