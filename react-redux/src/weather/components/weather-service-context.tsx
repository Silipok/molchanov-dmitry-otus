import React from "react";

const {
    Provider: WeatherServiceProvider,
    Consumer: WeatherServiceConsumer
    //@ts-ignore
}=React.createContext();

export {
    WeatherServiceProvider,
    WeatherServiceConsumer
}