import React from "react";

export interface IProps {
    weatherData:
{
    weather: {
        temperature: number|string,
        pressure: number|string,
        humidity: number|string
    },
    city:string,
    country: string
},
}

export const WeatherCard=({weatherData}: IProps)=>{
   const {weather,city,country}=weatherData;
    console.log('it card',weatherData);
   return(
       <div>
           <div>In {city}, {country}</div>
           <ul>
               <li>Temperature: {weather.temperature} C<sup><small>o</small></sup></li>
               <li>Pressure: {weather.pressure} mbar</li>
               <li>Humidity: {weather.humidity} %</li>
           </ul>
       </div>
   )
}