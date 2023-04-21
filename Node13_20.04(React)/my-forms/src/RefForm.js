import React, {useRef} from 'react'
export default function RefForm(){
    let nameRef = useRef("Dmytro");
    console.log(nameRef.current.value)
    const handleSubmit= event=>{
        event.preventDefault();
        
        
        alert(nameRef.current.value)


    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='userName' className="form-control">Name:
                <input name="userName" id="uName" type="text" className="form-control w-25"
                ref={nameRef}
                ></input>
                </label>
            </div>
            <div><button className="btn btn-success">Click me</button></div>
        </form>
    )
}