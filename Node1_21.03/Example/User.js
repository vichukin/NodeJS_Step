function User(name,age)
{
    this.name=name;
    this.age=age;
    this.printInfo=function(){
        console.log(`Name: ${this.name}\r\nAge = ${this.age}`)
    };
}
User.prototype.sayHi=function(){
    console.log(`Hello from ${this.name}`);
}
module.exports = User;