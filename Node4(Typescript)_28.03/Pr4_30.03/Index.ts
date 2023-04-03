// import $ from "jquery";
// //import "jquery";
// var checks = $(".min1");
class Topping {
    Title: string;
    Price: number;
    constructor(title:string,price:number)
    {
        this.Title=title;
        this.Price=price;
    }
}
class Icecream{
    Bigbucket: boolean;
    Toppings: Topping[];
    Marshmallow: boolean;
    constructor(bigbucket: boolean, toppings:Topping[], marshmallow:boolean)
    {
        this.Bigbucket = bigbucket;
        this.Toppings = toppings;
        this.Marshmallow = marshmallow;
    };
    Calculate():number{
        let sum:number = 0;
        if(this.Bigbucket)
            sum+=25;
        else
            sum+=10
        if(this.Marshmallow)
            sum+=5;
        for(var topping of this.Toppings)
        {
            sum+=topping.Price;
        }
        return sum;
    }

}
var top1: Topping = new Topping("Chocolate",5);
var top2: Topping = new Topping("Caramel",6);
var top3: Topping = new Topping("Berries",10);
var Toppings: Topping[] = [top1,top2,top3];
var btn = document.getElementById("smbbtn")!;
const clickHandler = (e: MouseEvent): void => {
    e.preventDefault();
    var checks: any = document.querySelectorAll("input.min1[type=checkbox]:checked").length;
    if(!checks) {
        alert("You must check at least one checkbox.");
        return;
      }
    else
    {
        var checkboxes = document.querySelectorAll("input.min1:checked") as NodeListOf<HTMLInputElement>; 
        // var el: HTMLInputElement = document.getElementById('smbbtn') as HTMLInputElement;
        var selectedtoppings: Topping[] = [];
        checkboxes.forEach((t:any)=>{
            selectedtoppings.push(Toppings[t.value]);
        });
        console.log(selectedtoppings);
        
        var radio: HTMLInputElement = document.querySelector("input[type=radio]:checked") as HTMLInputElement;
        var additional: HTMLInputElement = document.querySelector("#check4") as HTMLInputElement;
        var icecream: Icecream = new Icecream((radio.value =="true"),selectedtoppings,additional.checked);
        console.log(icecream.Calculate());
        alert(`For payment ${icecream.Calculate()} ₴`);
    }
  }
btn.onclick = clickHandler;