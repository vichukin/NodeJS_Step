import React, {useState} from 'react'
export default function ColorButton(props){
    const [btnText,setBtnText] = useState("text Before Click");
    const [bckColor,setBckColor] = useState("cadetblue");
    const clickHandler = ()=>{
        setBtnText("Shalom");
        setBckColor("coral");
    }
    
    return <button style={{backgroundColor:bckColor}} onClick={clickHandler}>{btnText}</button>
}