const express =require("express");
const app = express();
let auth = process.argv[2];
let port = process.argv[3];
app.get("/good/:id",(req,resp)=>{
    resp.write(`good id = ${req.params["id"]}`);
    resp.end("");
});
app.get("/",(req,resp)=>{
    resp.write("das");
    resp.end("fdsds");
});
app.listen(port,()=>{
    console.log('dasdad');
});