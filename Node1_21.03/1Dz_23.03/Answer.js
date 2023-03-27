const http = require("http");
const server = http.createServer((req,resp)=>{
    // var url = req.url;
    let path = req.url;
    let url = new URL(path, `http:\\${req.headers.host}`);
    resp.write(`Href - ${url.href}\r\n`);
    resp.write(`Host - ${url.host}\r\n`);
    resp.write(`Hostname - ${url.hostname}\r\n`);
    resp.write(`Pathname - ${url.pathname}\r\n`);
    resp.write(`Port - ${url.port}\r\n`);
    resp.write(`Params\r\n`);
    for(var param of url.searchParams.keys())
        resp.write(`${param} - ${url.searchParams.get(param)}\r\n`);
    resp.end();
})
let port = 3000;
server.listen(port,"127.0.0.1",()=>{console.log(`Server starts on ${port}`)});