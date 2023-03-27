const fs = require("fs");
const zlib = require("zlib");
const writestr = fs.createWriteStream("readme2.txt.gzip");
const gzip = zlib.createGzip();
// writestr.write("first");
// writestr.write("second");
// writestr.end("third");
const readstr = fs.createReadStream("readme.txt","utf8");
readstr.on("data",(chunk)=>{
    console.log(chunk);
    writestr.write(chunk);
});
readstr.pipe(writestr);