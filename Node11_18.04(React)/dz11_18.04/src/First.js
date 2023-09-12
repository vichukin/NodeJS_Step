import React, { useState } from 'react'

export default function First() {
    const [Red,SetRed] = useState(255);
    const [Green,SetGreen] = useState(255);
    const [Blue,SetBlue] = useState(255);
    const [RGB,SetRGB] = useState("255,255,255");
    const AddRed = ()=>{
        if(Red+1<=255)
        SetRed(Red+1);
        ReloadPalette();
    }
    const RemRed = ()=>{
        if(Red-1>=0)
            SetRed(Red-1);
            ReloadPalette();
    }
    const AddGreen = ()=>{
        if(Green+1<=255)
        SetGreen(Green+1);
        ReloadPalette();
    }
    const RemGreen = ()=>{
        if(Green-1>=0)
        SetGreen(Green-1);
        ReloadPalette();
    }
    const AddBlue = ()=>{
        if(Blue+1<=255)
        SetBlue(Blue+1);
        ReloadPalette();
    }
    const RemBlue = ()=>{
        if(Blue-1>=0)
        SetBlue(Blue-1);
        ReloadPalette();
    }
    const ReloadPalette=()=>{
        console.log("paletter reloaded")
        SetRGB(`${Red},${Green},${Blue}`);
    }
  return (
        <div className='row'>
            <div className='col-3'>
            <div className='RGBPalette' style={{backgroundColor:`rgb(${RGB})`}}></div>
            </div>
            <div className='col'>
            <div>
    <label className='form-label'>
    R:
    <input className='form-control' type='number' value={Red}></input>
    </label>
    <div className='btn-group'>
        <button onClick={AddRed} className='btn btn-secondary'>+</button>
        <button onClick={RemRed} className='btn btn-secondary'>-</button>
    </div>
</div>
<div>
    <label className='form-label'>
    G:
    <input className='form-control' type='number' value={Green}></input>
    </label>
    <div className='btn-group'>
        <button onClick={AddGreen} className='btn btn-secondary'>+</button>
        <button onClick={RemGreen} className='btn btn-secondary'>-</button>
    </div>
</div>
<div>
    <label className='form-label'>
    B:
    <input className='form-control' type='number' value={Blue}></input>
    </label>
    <div className='btn-group'>
        <button onClick={AddBlue} className='btn btn-secondary'>+</button>
        <button onClick={RemBlue} className='btn btn-secondary'>-</button>
    </div>
</div>
            </div>
        </div>
  )
}
