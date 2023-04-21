import React from "react";

export default class EnhancedButton extends React.Component{
    
    render(){
        const clickHandler = ()=>{
            this.props.onClickAction(this.props.btnValue);
        }
        return <button onClick={clickHandler}>+{this.props.btnValue}</button>
    }
}