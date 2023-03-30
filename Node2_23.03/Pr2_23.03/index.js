const express = require("express");
const app=express();
app.use( express.static(__dirname + '/public'));
app.get("/", (req, resp)=>resp.end("Hello world!"));

app.listen(3000,()=>{
    console.log("dsa");
})