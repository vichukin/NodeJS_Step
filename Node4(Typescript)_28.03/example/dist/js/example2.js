"use strict";
var Park;
(function (Park) {
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
    Park.Car = Car;
})(Park || (Park = {}));
