// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// import $ from "jquery";
// require("jquery");
var checks = $(".min1");
var Topping = /** @class */ (function () {
    function Topping(title, price) {
        this.Title = title;
        this.Price = price;
    }
    return Topping;
}());
var Icecream = /** @class */ (function () {
    function Icecream(bigbucket, toppings, marshmallow) {
        this.Bigbucket = bigbucket;
        this.Toppings = toppings;
        this.Marshmallow = marshmallow;
    }
    ;
    Icecream.prototype.Calculate = function () {
        var sum = 0;
        if (this.Bigbucket)
            sum += 25;
        else
            sum += 10;
        if (this.Marshmallow)
            sum += 5;
        for (var _i = 0, _a = this.Toppings; _i < _a.length; _i++) {
            var topping = _a[_i];
            sum += topping.Price;
        }
        return sum;
    };
    return Icecream;
}());
var top1 = new Topping("Chocolate", 5);
var top2 = new Topping("Caramel", 6);
var top3 = new Topping("Berries", 10);
var Toppings = [top1, top2, top3];
var btn = document.getElementById("smbbtn");
var clickHandler = function (e) {
    e.preventDefault();
    var checks = document.querySelectorAll("input.min1[type=checkbox]:checked").length;
    if (!checks) {
        alert("You must check at least one checkbox.");
        return;
    }
    else {
        var checkboxes = document.querySelectorAll("input.min1:checked");
        // var el: HTMLInputElement = document.getElementById('smbbtn') as HTMLInputElement;
        var selectedtoppings = [];
        checkboxes.forEach(function (t) {
            selectedtoppings.push(Toppings[t.value]);
        });
        console.log(selectedtoppings);
        var radio = document.querySelector("input[type=radio]:checked");
        var additional = document.querySelector("#check4");
        var icecream = new Icecream((radio.value == "true"), selectedtoppings, additional.checked);
        console.log(icecream.Calculate());
        alert("For payment ".concat(icecream.Calculate(), " \u20B4"));
    }
};
btn.onclick = clickHandler;
