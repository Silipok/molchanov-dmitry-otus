import React, {Component} from "react";
import {WeatherCard} from "./weather-card";
import {connect} from 'react-redux';

import {withGetWeatherService} from "./weather-hoc";
import {setLocation, weatherLoaded} from '../actions/actions';
import cityList from '../city.list.json';

interface IProps {
        weather: {
            temperature: number | string,
            pressure: number | string,
            humidity: number | string
        }
        city: string,
        country: string,
        hasError: boolean,
        isLoading: boolean,
        validityCity:boolean,
    weatherLoaded(data: object) :void,
    setLocation(location: object) :void,
    WeatherService: {
            getWeather(city:string,country:string): object
    }
}

interface IState {
    inputCity: string
}

class WeatherWidget extends Component<IProps,IState>{

    constructor(props: IProps){
        super(props);
        this.requestWeather=this.requestWeather.bind(this);
        this.setCity=this.setCity.bind(this);
}
        setCity(e: KeyboardEvent,list: [{name:string,country:string}]=cityList): void {
        if (e.target.value.length < 2) {
            this.props.setLocation({city: e.target.value, country: '', validity: false});
            return;
        }
            document.getElementById('cityList').innerHTML='';
        let i=0;
            list.find((loc) => {
            if (loc.name.toLowerCase().localeCompare(e.target.value.toLowerCase())==0) {
                this.props.setLocation({city: loc.name, country: loc.country, validity: true});
                document.getElementById('cityList').innerHTML+=
                    `<option key=${loc.name}>${loc.name},${loc.country}</option>`;
            }else{
                if(loc.name.includes(e.target.value,0) && i<5){
                    document.getElementById('cityList').innerHTML+=`<option value=${loc.name} key=${loc.name}>${loc.name},${loc.country}</option>`;
                    i++;
                }
            }
        });


    }


    async requestWeather(): Promise<void> {
       const {WeatherService}=this.props;
       const data=await WeatherService.getWeather(this.props.city,this.props.country);
       console.log(data);

        this.props.weatherLoaded(data);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
            if(!this.props.isLoading) {return (
            <>
                <input type="text" list={'cityList'} onChange={this.setCity}/>
                <WeatherCard weatherData={this.props}/>
                <datalist id={'cityList'}></datalist>
                <button onClick={this.requestWeather}
                        style={{visibility: (this.props.validityCity ? "visible":"hidden")}}>Get weather</button>
                <div style={{visibility: (this.props.validityCity ? "hidden":"visible")}}>Your city is not validity</div>
            </>
        )}else {
                return (
                    <>
                        <input type="text" list="cityList" onChange={this.setCity}/>
                        <datalist id={'cityList'}></datalist>
                        <button onClick={this.requestWeather}
                                style={{visibility: (this.props.validityCity ? "visible":"hidden")}}>Get weather</button>
                            <div style={{visibility: (this.props.validityCity ? "hidden":"visible")}}>Your city is not validity</div>
                    </>
                )
            }
    }
}
const mapStateToProps=({weather,city,country,hasError,isLoading,validityCity}: IProps)=>{
    return ({weather,city,country,hasError,isLoading,validityCity})
};
const mapDispatchToProps={
    weatherLoaded,
    setLocation
};

export default withGetWeatherService()(connect(mapStateToProps,mapDispatchToProps)(WeatherWidget));





