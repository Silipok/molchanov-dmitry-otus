import React from "react";


interface IProps {}
interface IState {
    city: string,
    temp?: number,
    hum?: number,
    pres?: number,
    ready: boolean,
    error: object | null,
}
//a25d02243d99d0a48f0f55bc8b1d564f

export class Weather extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
        this.state={
            city: '',
            temp: 0,
            hum: 0,
            pres: 0,
            ready: true,
            error: null
        };

        this.getWeather=this.getWeather.bind(this);
        this.setCity=this.setCity.bind(this);
        this.PrintWeather=this.PrintWeather.bind(this)
    }

    PrintWeather(){
        if(this.state.ready){
            if(this.state.error!==null){
                return <div>Error: {this.state.error}</div>
            }
            return (<div>
                <ul>
                    <li key={'Temp'}>Temperature in {this.state.city} : {this.state.temp} C</li>
                    <li key={'Press'}>Pressure : {this.state.pres} millibar</li>
                    <li key={'Hum'}>Humadity :{this.state.hum}%</li>
                </ul>
            </div>)
        }
        return <div>Choose city</div>
    }

    setCity(e: any){
        this.setState({city: e.target.value});
        //console.log(this.state.city)
    }

    async getWeather() {
        console.log('start req');
        let answer: any = await fetch(`http://api.weatherstack.com/current?
                                             access_key=a25d02243d99d0a48f0f55bc8b1d564f&
                                             query=${this.state.city}&
                                             unit=m`);
        if(answer.status !== 200){
            this.setState({error: answer,ready: true})
        } else {
            answer= await answer.json();
            console.log(answer);
            if(!answer.hasOwnProperty('success')) {
                this.setState({
                    ready: true,
                    temp: answer.current.temperature,
                    pres: answer.current.pressure,
                    hum: answer.current.humidity
                })
            }
            else {
                this.setState({
                    error: answer.error
                })
            }
        }
    }


    render(){
        return(
            <div>
                <label>
                     City:
                        <input type="text" id="city" tabIndex={1} value={this.state.city} onChange={this.setCity}/>
                </label>
                <button onClick={this.getWeather}>Get weather!</button>
                <div className='weather'>
                    {this.PrintWeather()}
                </div>
            </div>
        )
    }
}