import React, {Component} from 'react'
export default class UserForm extends Component{
    name = React.createRef();
    surname =   React.createRef();
    render(){
        const handleSubmit= event=>{
            event.preventDefault();
            let userName = this.name.current.value;
            let userSurname = this.surname.current.value;
            alert(`${userName} ${userSurname}`)
        }
        return <form onSubmit={handleSubmit} className='w-25'>
            <div className='mb-3'>
                <label htmlFor='userName' className="form-control">Name:
                <input name="userName" id="uName" type="text" className="form-control "
                ref={this.name}
                ></input>
                </label>
                </div>
                <div className='mb-3'>
                <label htmlFor='userSurname' className="form-control">Surname:
                <input name="userSurname" id="uSurname" type="text" className="form-control "
                ref={this.surname}
                ></input>
                </label>
            </div>
            <div><button className="btn btn-success">Click me</button></div>
        </form>

    }
}