
let firstname: string = "Dima";
let age: number = 32;
let userdata: string = `${firstname} ${age} years olds`;
console.log(userdata);
let x: string | number;
x = "sdsd";
x=23;
type numberOrStringType = number|string;
let b: numberOrStringType = 345;
b="dsadsad";
if(typeof(b)==="number")
console.log(b/3);
else
    console.log("Not a number");

function add(x:number,y:number):number
{
    return x+y;
}
// function add(x:string,y:string):string
// {
//     return x+y;
// }
// function add(x:any,y:any):any{
//     return x+y;
// }
console.log(add(3,7));
let op: (x:number,y:number)=>number;
op=add;
console.log(`3 + 5 = ${op(3,5)}`);
function mathop(a:number,b:number, func:(x:number,y:number)=>number): number{
    let res = func(a,b);
    return res;
}
console.log(`4 + 9 = ${mathop(4,9,add)}`);
console.log(`4 * 9 = ${mathop(4,9,(x,y)=>x*y)}`);
console.log(`4 - 9 = ${mathop(4,9,(x,y)=>x-y)}`);
let country:any = "Ukraine";
let count:number = (<string>country).length;
let count1:number = (country as string).length;
console.log(count);
console.log(count1);
class User{
    private Id:number;
    readonly Firstname:string;
    getInfo():string{
        return `Id = ${this.Id}, Name = ${this.Firstname}`;
    };
    constructor(id:number,Name: string)
    {
        this.Id =id;
        this.Firstname = Name;
    }

}
let user = new User(1,"Dima");
console.log(user.getInfo());
class Operation{
    static PI: number = Math.PI;
    static getSquare(radius:number):number{
        return this.PI*this.PI*radius;
    }
}
let opp = new Operation();
console.log(Operation.getSquare(5));
class Car{
    private _model:string;
    set model(m: string){
        this.model=m;
    };
    get model():string{
        return this._model;
    }
    constructor(model: string){
        this._model = model;
    }
}
let tesla = new Car("Tesla T3")
console.log(tesla.model);
console.log(tesla.model);
class Book{
    showInfo():void{
                
        console.log(`${this.title}, ${this.author}`)
    }
    constructor(public title:string, protected author: string)
    {
    }
}
let book = new Book("1984","Orwel");
book.showInfo();
console.log(book.title);
enum Positions {"Manager","TeamLead","Junior","Middle","Project manager"}
class Employee extends User{
    position: Positions;
    constructor(id:number,Name: string, position: Positions)
    {
        super(id,Name);
        this.position = position;
    }
    getInfo(): string {
        return super.getInfo()+" "+Positions[this.position];
    }
}
let emp1 = new Employee(23,"dima",Positions["Project manager"]);
console.log(emp1.getInfo());
interface IUser{
    Id:number;
    Name: string;
    getInfo(): string;
}
let admin : IUser = {
    Id: 8,
    Name: "Dima",
    getInfo: function():string{
        return `${this.Id} - ${this.Name}`;
    }
};
console.log(admin.getInfo());