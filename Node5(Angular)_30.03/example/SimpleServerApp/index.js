const express = require("express");
const app = express();
app.get("/sum",(req,resp)=>{
    if(resp.query){
        resp.statusCode=404;
        resp.end("Method not found");
    }
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1+num2;
    console.log(`${num1} + ${num2} = ${sum}`);
    console.log(req.query);
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Headers","Origin","X-Requested-With","content-type","Accept");
    resp.setHeader("Access-Control-Allow-Methods","GET","POST","PUT","DELETE");
    resp.send({result: sum});
});
let port =3000;
app.listen(port,()=>{
    console.log(`server starts at ${port}`);
});