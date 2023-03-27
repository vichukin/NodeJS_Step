const morning = require("./morning");
const evening = require("./evening");
module.exports={
    getMorningGreetings: function(name){
        // console.log(`${morning} ${global.surname}`);
        console.log(`${morning} ${name}`);
    },
    getEveningGreetings: function(name){
        // console.log(`${evening} ${global.surname}`);
        console.log(`${evening} ${name}`);
    }
};