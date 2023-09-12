import React, { Component, useState } from 'react'

export default class Second extends Component {
    constructor() {
        super();
        this.state = {
          Quote: ""
        };
        this.ButtonHandler = this.ButtonHandler.bind(this);
      }
    ButtonHandler(){
        let arr = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "The journey of a thousand miles begins with one step. - Lao Tzu",
            "You miss 100% of the shots you don't take. - Wayne Gretzky",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
          ];
        // this.setState({Quote: arr[Math.floor(Math.random() * 9)]});
        this.setState({ Quote: arr[Math.floor(Math.random() * 9)] });
    }
  render() {
    return (
      <div className='row'>
        <div className='col-3'>
            <h6>
               {this.state["Quote"]} 
            </h6>
        </div>
        <div className='col-9'>
            <button onClick={this.ButtonHandler}>
                Get Quote
            </button>
        </div>
      </div>
    )
  }
}
