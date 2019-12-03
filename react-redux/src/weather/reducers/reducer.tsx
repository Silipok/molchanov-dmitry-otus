interface IAction {
    type: string,
    value: any
}
const initialState={
    weather: {
        temperature: 0,
        humidity: 0,
        pressure: 0
    },
    city: '',
    country: '',
    hasError: false,
    isLoading: true,
    validityCity: true
}

export const reducer=(state=initialState,action:IAction)=>{
    switch (action.type) {
        case 'WEATHER_LOADED':
            return {...action.value,isLoading: false,validityCity: true};
        case 'SET_LOCATION':
            return {...state,city: action.value.city,country: action.value.country,validityCity: action.value.validity};
        default: return state;
    }
}