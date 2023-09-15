import React, { useState } from 'react'
import axios from "axios"

export default function Third() {
    const [result, setResult] = useState(false);
    const [message, setMessage] = useState("Click button for start!");
    const [playerResult, setPlayerResult] = useState("0");
    const [botResult, setBotResult] = useState("0");
    const startGame = ()=>{
        axios.post("https://api.random.org/json-rpc/4/invoke",{
            jsonrpc: "2.0",
            method: 'generateIntegers',
            params:
            {
                apiKey: "98103c82-5bdd-42b7-8f5e-57c33c66b6df",
                n:2,
                min:1,
                max:6
            },
            id:1
        }).then((responce)=>{
            let numbers = responce.data.result.random.data;
            let you = numbers[0];
            let comp = numbers[1];
            if(you>comp)
            {
                setMessage("You win!")
            }
            else if(you<comp)
            {
                setMessage("You lose!")
            }
            else
            {
                setMessage("Draw!")
            }
            setPlayerResult(you);
            setBotResult(comp);
        })
    }   
  return (
    <div className='row'>
        <div className='col col-2 mt-4'>
            <h2 className='text-center'>Menu</h2>
            <button onClick={startGame} className='btn btn-outline-primary w-100'>Start!</button>
        </div>
        <div className='col col-5'>
            <div className='GameBoard container p-4 border border-dark mt-4'>
                <div className='Result row' style={{hidden: result}}>
                        <h2 className='text-center'>{message}</h2>
                </div>
                <div className='row'>
                    <div className='col col-3 border border-dark'>
                        <h3 className='text-center p-4'>{playerResult}</h3>
                        
                    </div>
                    <div className='col col-3 pt-4'>
                        <h4>You</h4>
                    </div>
                    <div className='col col-3 pt-4'>
                        <h4 className='text-right'>Comp.</h4>
                    </div>
                    <div className='col col-3 border border-dark'>
                        <h3 className='text-center p-4'>{botResult}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
