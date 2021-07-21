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
var Vehicle = /** @class */ (function () {
    //   private brandName: string;
    //   private model: string;
    //   private color: string;
    function Vehicle(brandName, model, color, price) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
        this.price = price;
        // this.brandName = b;
        // this.model = model;
        // this.color = color;
    }
    Object.defineProperty(Vehicle.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "setPrice", {
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.PriceToCurrency = function (value, typeOfCurrency) {
        var result = "";
        switch (typeOfCurrency) {
            case "USD":
                result = "US" + value;
                break;
            case "PESO":
                result = "PESO" + value;
                break;
            default:
                break;
        }
        return result;
    };
    Vehicle.prototype.drive = function () {
        console.log("Conduciendo un " + this.brandName + ", el modelo es " + this.model + ", color " + this.color);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log("Estoy conduciendo un auto " + this.brandName + ", modelo " + this.model + ", color: " + this.color + ", el precio es " + this.getPrice);
    };
    return Car;
}(Vehicle));
var currency = Vehicle.PriceToCurrency(10, 'PESO');
console.log(currency);
// const vehicle = new Car("Mazda", "3", "Rojo", 200);
// vehicle.drive();
// vehicle.setPrice = 150;
// vehicle.drive();
