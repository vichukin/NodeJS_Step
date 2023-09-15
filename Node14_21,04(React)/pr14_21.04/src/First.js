import axios from 'axios';
import React, { Component } from 'react'

export default class First extends Component {
    constructor(props)
    {
        super(props)
        this.Min = React.createRef();
        this.Max = React.createRef();
        this.state={
            "hidden": true,
            "result": ""
        }
    }
    Results = (event)=>{
        event.preventDefault();
        let min = this.Min.current.value;
        let max = this.Max.current.value;
        axios.post("https://api.random.org/json-rpc/4/invoke",{
            jsonrpc: "2.0",
            method: 'generateIntegers',
            params:
            {
                apiKey: "98103c82-5bdd-42b7-8f5e-57c33c66b6df",
                n:1,
                min:min,
                max:max
            },
            id:1
        }).then((responce)=>{
            let number = responce.data.result.random.data[0];
            this.setState({result: number});
            this.setState({hidden: false});
        });
    }
  render() {
    return (
      <div className='row'>
        <div className='col'>
            <form onSubmit={this.Results}>
                <div>
                    <label className='form-label'>
                        Min:
                        <input required ref={this.Min} className='form-control' type='number'></input>
                    </label>
                
                </div>
                <div>
                    <label className='form-label'>
                        Max:
                        <input required ref={this.Max} className='form-control' type='number'></input>
                    </label>
                </div>
                <div>
                    <button className='btn btn-outline-success'>Ger random</button>
                </div>
            </form>
            <div hidden={this.state.hidden}>
                <h3>Your result: {this.state.result}</h3>
            </div>
        </div>
        
      </div>
    )
  }
}
