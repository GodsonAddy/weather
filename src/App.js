import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import WeatherApp from './WeatherApp';
import ForecastPage from './ForecastPage';


function App() {
 
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component={WeatherApp} />
          <Route path = "/forecast" component={ForecastPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
