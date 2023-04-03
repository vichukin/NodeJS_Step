var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.Model = model;
        this.Price = price;
    }
    Car.prototype.ShowInfo = function () { return "Model ".concat(this.Model, "\nPrice ").concat(this.Price); };
    ;
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, price) {
        var _this = _super.call(this, model, price) || this;
        _this.Manufacturer = "BMW";
        return _this;
    }
    BMW.prototype.ShowInfo = function () {
        return "".concat(_super.prototype.ShowInfo.call(this), "\nManufacturer - ").concat(this.Manufacturer);
    };
    return BMW;
}(Car));
var Lamborghini = /** @class */ (function (_super) {
    __extends(Lamborghini, _super);
    function Lamborghini(model, price) {
        var _this = _super.call(this, model, price) || this;
        _this.Manufacturer = "lamborghini";
        return _this;
    }
    Lamborghini.prototype.ShowInfo = function () {
        return "Manufacturer - ".concat(this.Manufacturer, "\n").concat(_super.prototype.ShowInfo.call(this));
    };
    return Lamborghini;
}(Car));
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(model, price) {
        var _this = _super.call(this, model, price) || this;
        _this.Manufacturer = "Ford";
        return _this;
    }
    Ford.prototype.ShowInfo = function () {
        return "Mark of car - ".concat(this.Manufacturer, "\n").concat(_super.prototype.ShowInfo.call(this));
    };
    return Ford;
}(Car));
var ford1 = new Ford("Mustang", 46000);
var ford2 = new Ford("Bronco SUV", 32295);
var bmw1 = new BMW("M8", 109400);
var bmw2 = new BMW("I7", 119300);
var lamborghini1 = new Lamborghini("Revuelto", 542165);
var lamborghini2 = new Lamborghini("Countach LPI 800-4", 2600000);
var cars = [ford1, ford2, bmw1, bmw2, lamborghini1, lamborghini2];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log(car.ShowInfo());
}
