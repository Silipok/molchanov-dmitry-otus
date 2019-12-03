import React from "react";
import {ErrorIndicator} from './error-indicator'

export interface IState {
    hasError: boolean
}

export class ErrorBoundry extends React.Component{
     state: IState={
         hasError: false
     };

     componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
         this.setState({hasError: true})
     }

     render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
         if(this.state.hasError){
             return <ErrorIndicator/>
         }
         return this.props.children
     }
}