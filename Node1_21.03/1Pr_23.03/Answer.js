const os = require("os");
const http = require("http");
const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html; charset=utf-8")
    for(let adap in os.networkInterfaces())
{
    resp.write(`<h4>${adap}:</h4><ul>`);
    // console.log(`${os.networkInterfaces()[adap]}\r\n`);
    for(let inter of os.networkInterfaces()[adap])
    {
        for(let info in inter)
        {
            resp.write(`<li>${info}: ${inter[info]}</li>`);
        }
    }
    resp.write(`</ul>`)
}
resp.end();
});
let port = 3000;
server.listen(port,"127.0.0.1");