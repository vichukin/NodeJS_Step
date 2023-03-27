// function processRequest(data){
    
//     console.log(data);
// }
// function processRequestdelay(data){
//     setTimeout(() => {
//         console.log(data);
//     }, 1000);
// }

// console.log("starting execution");
// processRequestdelay("processingrequest");
// console.log("ending exec");
const fs = require("fs");
// fs.writeFileSync("readme.txt","Hello Node.JS!");
// console.log("file was modified");
fs.writeFile("readme.txt","Darova",(er,data)=>{
    if(er) throw er;
});
console.log("file was modified");