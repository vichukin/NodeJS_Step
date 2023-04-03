abstract class Car{
    Model:string;
    Price:number;
    ShowInfo():string{return `Model ${this.Model}\nPrice ${this.Price}`};
    constructor(model:string,price:number){
        this.Model=model;
        this.Price = price;
    }
}

class BMW extends Car{
    Manufacturer:string;
    constructor(model:string,price:number)
    {
        super(model,price);
        this.Manufacturer = "BMW"
    }
    ShowInfo(): string {
        return `${super.ShowInfo()}\nManufacturer - ${this.Manufacturer}`;
    }
}
class Lamborghini extends Car{
    Manufacturer:string;
    constructor(model:string,price:number)
    {
        super(model,price);
        this.Manufacturer = "lamborghini"
    }
    ShowInfo(): string {
        return `Manufacturer - ${this.Manufacturer}\n${super.ShowInfo()}`;
    }
}
class Ford extends Car{
    Manufacturer:string;
    constructor(model:string,price:number)
    {
        super(model,price);
        this.Manufacturer = "Ford"
    }
    ShowInfo(): string {
        return `Mark of car - ${this.Manufacturer}\n${super.ShowInfo()}`;
    }
}

var ford1: Ford = new Ford("Mustang",46000);
var ford2: Ford = new Ford("Bronco SUV",32295);
var bmw1: BMW = new BMW("M8",109400);
var bmw2: BMW = new BMW("I7",119300);
var lamborghini1: Lamborghini = new Lamborghini("Revuelto",542165);
var lamborghini2: Lamborghini = new Lamborghini("Countach LPI 800-4",2600000);
var cars: Car[] = [ford1,ford2,bmw1,bmw2,lamborghini1,lamborghini2];

for(var car of cars)
{
    console.log(car.ShowInfo());
}