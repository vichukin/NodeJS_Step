import React, { Component } from 'react'

export default class First extends Component {
    constructor() {
        super();
        this.state = {
          Fullname: "",
          Number:"",
          Email:"",
          City:"",
          Display:"none"
        };
      }
    FullnameChange = event=>{
        this.setState({Fullname: event.target.value})
    }
    EmailChange = event=>{
        this.setState({Email: event.target.value})
    }
    NumberChange = event=>{
        this.setState({Number: event.target.value})
    }
    CityChange = event=>{
        this.setState({City: event.target.value})
    }
    FormSubmit= event=>{
        event.preventDefault();
        this.setState({Display:"block"});
    }
  render() {
    return (
      <>
      <div className='row'>
        <div className='col'>
        <form onSubmit={this.FormSubmit}>
        <div>
        <label className='form-label'>
            Fullname:
            <input required onChange={this.FullnameChange} className='form-control'></input>
        </label>
        </div>
        <div>
            <label className='form-label'>
                Number:
                <input required onChange={this.NumberChange} className='form-control' ></input>
            </label>
        </div>
        <div>
            <label  className='form-label'>
                Email:
                <input required onChange={this.EmailChange} className='form-control' type='email'></input>
            </label>
        </div>
        <div>
            <label className='form-label'>
                City:
                <input required onChange={this.CityChange} className='form-control'></input>
            </label>
        </div>
        <div>
            <button className='btn btn-outline-success '>
                Check form
            </button>
        </div>
      </form>
        </div>
        <div className='col'>
            <div style={{display: this.state.Display}}>
                <h2>{this.state.Fullname}</h2>
                <h3>{this.state.Number}</h3>
                <h4>{this.state.Email}</h4>
                <h5>{this.state.City}</h5>
            </div>
        </div>
      </div>
      </>
    )
  }
}
