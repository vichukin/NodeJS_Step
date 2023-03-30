"use strict";
let firstname = "Dima";
let age = 32;
let userdata = `${firstname} ${age} years olds`;
console.log(userdata);
let x;
x = "sdsd";
x = 23;
let b = 345;
b = "dsadsad";
if (typeof (b) === "number")
    console.log(b / 3);
else
    console.log("Not a number");
function add(x, y) {
    return x + y;
}
// function add(x:string,y:string):string
// {
//     return x+y;
// }
// function add(x:any,y:any):any{
//     return x+y;
// }
console.log(add(3, 7));
let op;
op = add;
console.log(`3 + 5 = ${op(3, 5)}`);
function mathop(a, b, func) {
    let res = func(a, b);
    return res;
}
console.log(`4 + 9 = ${mathop(4, 9, add)}`);
console.log(`4 * 9 = ${mathop(4, 9, (x, y) => x * y)}`);
console.log(`4 - 9 = ${mathop(4, 9, (x, y) => x - y)}`);
let country = "Ukraine";
let count = country.length;
let count1 = country.length;
console.log(count);
console.log(count1);
class User {
    getInfo() {
        return `Id = ${this.Id}, Name = ${this.Firstname}`;
    }
    ;
    constructor(id, Name) {
        this.Id = id;
        this.Firstname = Name;
    }
}
let user = new User(1, "Dima");
console.log(user.getInfo());
class Operation {
    static getSquare(radius) {
        return this.PI * this.PI * radius;
    }
}
Operation.PI = Math.PI;
let opp = new Operation();
console.log(Operation.getSquare(5));
class Car {
    set model(m) {
        this.model = m;
    }
    ;
    get model() {
        return this._model;
    }
    constructor(model) {
        this._model = model;
    }
}
let tesla = new Car("Tesla T3");
console.log(tesla.model);
console.log(tesla.model);
class Book {
    showInfo() {
        console.log(`${this.title}, ${this.author}`);
    }
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
let book = new Book("1984", "Orwel");
book.showInfo();
console.log(book.title);
var Positions;
(function (Positions) {
    Positions[Positions["Manager"] = 0] = "Manager";
    Positions[Positions["TeamLead"] = 1] = "TeamLead";
    Positions[Positions["Junior"] = 2] = "Junior";
    Positions[Positions["Middle"] = 3] = "Middle";
    Positions[Positions["Project manager"] = 4] = "Project manager";
})(Positions || (Positions = {}));
class Employee extends User {
    constructor(id, Name, position) {
        super(id, Name);
        this.position = position;
    }
    getInfo() {
        return super.getInfo() + " " + Positions[this.position];
    }
}
let emp1 = new Employee(23, "dima", Positions["Project manager"]);
console.log(emp1.getInfo());
let admin = {
    Id: 8,
    Name: "Dima",
    getInfo: function () {
        return `${this.Id} - ${this.Name}`;
    }
};
console.log(admin.getInfo());
