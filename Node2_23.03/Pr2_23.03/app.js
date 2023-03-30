const Parser = require( "./parser");
const fs = require("fs");
const Emitter = require("events");
let emitter = new Emitter();
let read = fs.createReadStream("./file.txt","utf-8");
let dict;
emitter.on("Parser",(fs,text)=>{
    dict = Parser(text.toLowerCase());
    write = fs.createWriteStream("./result.txt");
    for(el in dict)
    {
        write.write(`${el} - ${dict[el]}\n`);
        console.log(`${el} - ${dict[el]}`);
    }
})
read.on("data",(chunk)=>
{
   emitter.emit("Parser",fs,chunk);
});

