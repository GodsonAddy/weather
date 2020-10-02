import React from 'react';
import CurrentWeather from './CurrentWeather';
import NavBar from './NavBar'

const WeatherApp = () => {
    return (
        <div>
            <NavBar />
            <CurrentWeather />   
        </div>
    )
}

export default WeatherApp;
