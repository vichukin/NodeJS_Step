import React from 'react';
export default class User extends React.Component{
    name = "Dmytro";
    age = 23;
    render(){
        return <div className='admin'>Name: {this.name}, {this.age} years old</div>
    }
}