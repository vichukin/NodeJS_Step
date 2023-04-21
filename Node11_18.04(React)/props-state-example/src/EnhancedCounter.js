import React from "react";
import EnhancedButton from "./EnhancedButton";
import Display from "./Display";

export default class EnhancedCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentValue: props.startValue}
    }
    render(){
        const handlerClick=(increment)=>{
            this.setState({currentValue: this.state.currentValue + +increment})
        }
        return <div>
            <EnhancedButton btnValue = {this.props.incValue} onClickAction={handlerClick}></EnhancedButton>
            <Display Value={this.state.currentValue}></Display>
        </div>
    }
}
EnhancedCounter.defaultProps = {
    incValue: 1,
    startValue: 12
}