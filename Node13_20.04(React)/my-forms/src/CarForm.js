import React, {useState} from 'react'
export default function CarForm(){
    const [model,setModel] = useState("");
    const handleSubmit=event=>{
        event.preventDefault();
        alert(model);
    }
    const handleModelChange=event=>{
        setModel(event.target.value);
    }
    return <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='model'>Model:
                <input type='text' name='model' onChange={handleModelChange} value={model}></input>
            </label>
        </div>
        <button className='btn btn-success'>Add</button>
    </form>
}