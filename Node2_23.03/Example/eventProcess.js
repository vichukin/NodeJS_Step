const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
function showgreetmessage()
{
    console.log("My greet message");
}
emitter.on(eventName,()=>{
    console.log("hello world of events in NodeJS");
});
emitter.on(eventName,()=>{
    console.log("2 tut");
});
emitter.on(eventName,showgreetmessage);
emitter.on("finish",()=>{
    console.log("emiter end");
})
emitter.off(eventName,showgreetmessage);
emitter.emit(eventName);
console.log("---------------");
emitter.emit("finish");