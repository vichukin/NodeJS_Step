// let myPow= function(x,y){
//     return x**y;
// }
// let a = 4;
// console.log(`${a}^3+${myPow(4,3)}`);
const http = require("http"); 
// const server = http.createServer((req, resp) => 
// { 
//     let path = req.url; 
//     let url = new URL(path, `http:\\${req.headers.host}`); 
//     let name = url.searchParams.get("name"); 
//     if (name) 
//         resp.end(`User Name: ${name}`); 
//     else 
//         // resp.end("You should provide name parameter!"); 
//     {
//         resp.writeHead(404);
//         resp.end(http.STATUS_CODES[404]);
//     }
// });
let simpleRoutesExample = function(req,resp){
    

}
var routes={
    "/": function index(req,resp){
        resp.end("This is root of our app!");
    },
    "/about": function about(req,resp){
        resp.end("Here must be about page");
    },
    "/shop": function shop( req,resp){
        // resp.setHeader("content-type",)
        resp.write("<h1>My page</h1>");
        resp.end("<div style='color: red;'> main content</div>");
    } 

}
const server = http.createServer((req,resp)=>{
    // if(req.url==="/")
    //     routes["/"](req,resp);
    // else if(req.url==="/about")
    //     routes["/about"](req,resp)
    if(req.url in routes)
    routes[req.url](req,resp);
    else
    {
        resp.writeHead(404);
        resp.end(http.STATUS_CODES[404]);
    }
})
let port = 3000; 
server.listen(port, "127.0.0.1", () => { console.log(`Server starts on ${port}}`)}); 

