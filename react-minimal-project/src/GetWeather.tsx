import React from "react";

interface IProps {

}
interface IState {
    city: string,
    temp?: number,
    ready: boolean,
    error: object | null,
}

class Weather extends React.Component<IProps,IState> {
    constructor(props: IProps){
        super(props);
        this.setState(()=>{
            return {...this.state,city: '',ready: false,error: null}
        })
    }

    getWeather(){

    }
}