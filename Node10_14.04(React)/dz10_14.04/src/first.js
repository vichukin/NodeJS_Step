import React, { Component } from 'react'


function FirstJSX(){
    return <>
    <div>
        <h1>Hello Reacr from JSX</h1>
    </div>
    </>
}
function FirstCreate(){
    const element = React.createElement("h1",null,"Hello World from createElement");
    return element;
}
export {FirstJSX,FirstCreate}