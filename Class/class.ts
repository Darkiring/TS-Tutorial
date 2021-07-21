interface Billable {
  currentBill(): string;
}
interface Flyable {
  altitude(): string;
}
abstract class Vehicle {
  static currentPrice: number;
  //   private brandName: string;
  //   private model: string;
  //   private color: string;
  constructor(
    protected readonly brandName: string,
    protected readonly model: string,
    protected readonly color: string,
    private price: number
  ) {
    // this.brandName = b;
    // this.model = model;
    // this.color = color;
  }

  get getPrice() {
    return this.price;
  }

  set setPrice(value: number) {
    this.price = value;
  }

  static PriceToCurrency(value: number, typeOfCurrency: string) {
    let result = "";
    this.currentPrice = value;
    switch (typeOfCurrency) {
      case "USD":
        result = "USD " + this.currentPrice;
        break;
      case "PESO":
        result = "PESO " + this.currentPrice;
        break;
      default:
        break;
    }
    return result;
  }

  abstract drive(): void;
}

class Car extends Vehicle implements Billable {
  drive(): void {
    console.log(
      `Estoy conduciendo un auto ${this.brandName}, modelo ${this.model}, color: ${this.color}, el precio es ${this.getPrice}`
    );
  }
  currentBill(): string {
    return `La factura actual es de ${this.getPrice}`;
  }
}

class Airplane extends Vehicle implements Billable, Flyable {
  drive(): void {
    console.log(
      `Estoy conduciendo un auto ${this.brandName}, modelo ${this.model}, color: ${this.color}, el precio es ${this.getPrice}`
    );
  }
  currentBill(): string {
    return `La factura actual es de ${this.getPrice}`;
  }
  altitude(): string {
      return `La altitud es de ${this.getPrice}`;
  }
}

// const currency = Car.PriceToCurrency(10, "USD");
// console.log(currency);
const vehicle: Flyable = new Airplane("Mazda", "3", "Rojo", 200);
// vehicle.drive();
// vehicle.currentBill();
// vehicle.setPrice = 150;
// vehicle.drive();
