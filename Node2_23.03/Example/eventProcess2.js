const EventEmitter = require("events");

let eventName = "greet";

class User extends EventEmitter{

    constructor(name, age){

        super();

        this.name = name;

        this.age = age;

    }

    sayHi(){

        this.emit(eventName, this.name, this.age);

    }

}

let user = new User("Serhii", 42);

user.sayHi();

console.log("---------After registration-----------");

// user.on(eventName, (name,age)=>{

//     console.log("Привіт від користувача!\n");

//     console.log(`My name is ${name}. I'm ${age} years old`);

// });

// name and age is UNDEFINED!

user.on(eventName,()=>{

    console.log("Привіт від користувача!\n");

    console.log(`My name is ${this.name}. I'm ${this.age} years old`);

});

user.on(eventName, function(){

    console.log("Привіт від користувача!\n");

    console.log(`My name is ${this.name}. I'm ${this.age} years old`);

});

user.sayHi();