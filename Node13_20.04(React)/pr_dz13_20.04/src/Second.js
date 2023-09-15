import React, { Component } from 'react'

export default class Second extends Component {
    
    constructor(props) {
        super(props);
        this.Fullname = React.createRef();
        this.Email = React.createRef();
        this.Number = React.createRef();
        this.City = React.createRef();
      }
    
      FormSubmit = (event) => {
        event.preventDefault();
        let res = document.getElementById("res");
        res.innerHTML=
        `
        <h2>${this.Fullname.current.value}</h2>
                  <h3>${this.Number.current.value}</h3>
                  <h4>${this.Email.current.value}</h4>
                  <h5>${this.City.current.value}</h5>
        `
      };  
  render() {
    return (
        <>
        <div className='row'>
          <div className='col'>
          <form onSubmit={this.FormSubmit}>
          <div>
          <label className='form-label'>
              Fullname:
              <input required ref={this.Fullname} className='form-control'></input>
          </label>
          </div>
          <div>
              <label className='form-label'>
                  Number:
                  <input required ref={this.Number} className='form-control' ></input>
              </label>
          </div>
          <div>
              <label  className='form-label'>
                  Email:
                  <input required ref={this.Email} className='form-control' type='email'></input>
              </label>
          </div>
          <div>
              <label className='form-label'>
                  City:
                  <input required ref={this.City} className='form-control'></input>
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
              <div id="res">
                  
              </div>
          </div>
        </div>
        </>
    )
  }
}
