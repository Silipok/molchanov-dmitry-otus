import React from "react";
import {withGetWeatherService} from "./weather-hoc";
import WeatherWidget from "./weather-widget";


const App=({WeatherService})=>{
   return(
        <div>
            <h1>Test app</h1>
            <WeatherWidget />
        </div>
    )
};

export default withGetWeatherService()(App);