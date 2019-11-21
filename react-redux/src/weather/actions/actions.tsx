interface IWeather {
    weather: {
        temperature: number | string,
        pressure: number | string,
        humidity: number | string
    }
    city: string,
    country: string,
    hasError: boolean,
    isLoading: boolean,
    validityCity: boolean
}

export const weatherLoaded=(newWeather: IWeather)=>{
    return {
        type: 'WEATHER_LOADED',
        value: newWeather
    };
 };

export const setLocation=(location:{city: string,country: string,validity: boolean})=>{
    return{
        type: 'SET_LOCATION',
        value: location
    }
}