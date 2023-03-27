const fs = require("fs");

const writestr = fs.createWriteStream("readme.txt");
writestr.write("first");
writestr.write("second");
writestr.end("third");
const readstr = fs.createReadStream("readme.txt","utf8");
readstr.on("data",(chunk)=>{
    console.log(chunk);
    writestr.write(chunk);
});
readstr.read();