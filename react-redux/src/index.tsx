import React from "react"
import ReactDOM from "react-dom"
// @ts-ignore
import {Provider} from "react-redux"

import App from "./weather/components/app";
import {ErrorBoundry} from "./weather/components/error-boundry";
import {WeatherService} from "./weather/services/weather-service";
import {WeatherServiceProvider} from "./weather/components/weather-service-context"

import {store} from "./weather/store"

const weatherService=new WeatherService;

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WeatherServiceProvider value={weatherService}>
                <App/>
            </WeatherServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);