import React from "react";

export default class Counter extends React.Component{

    constructor(props){

        super(props);

        this.state = {currentValue: +this.props.startValue};

    }

    handlerClick = ()=>{

        this.setState({currentValue: this.state.currentValue + +this.props.incValue} );

        console.log(this.state.currentValue);

    }

    render(){    

        return <button onClick={this.handlerClick} style={{fontSize: `${this.state.currentValue}px`}}>{this.state.currentValue}</button>

    }

}
Counter.defaultProps ={
    startValue:12,
    incValue:1
}