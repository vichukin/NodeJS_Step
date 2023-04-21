import React from 'react'
export default function MyForm(){
    
    const handleSubmit= event=>{
        event.preventDefault();
        let uName=document.getElementById("uName").value;
        uName = document.forms[0].elements[0].value;
        alert(uName);


    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-control">Name:
                <input name="userName" id="uName" type="text" className="form-control w-25"></input>
                </label>
            </div>
            <div><button className="btn btn-success">Click me</button></div>
        </form>
    )
}