import React, {JSXElementConstructor} from "react";
import {WeatherServiceConsumer} from "./weather-service-context"

export const withGetWeatherService=()=>(Wrapped: any)=>{

    return (props: {})=>{
        return (
            <WeatherServiceConsumer>
                {
                    (weatherService: {})=>{
                        return(<Wrapped {...props} WeatherService={weatherService}/>)
                    }
                }
            </WeatherServiceConsumer>
        )
    }
}