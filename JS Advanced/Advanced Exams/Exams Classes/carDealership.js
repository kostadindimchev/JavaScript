class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      !model ||
      Number(horsepower) < 0 ||
      horsepower % 1 !== 0 ||
      Number(price) < 0 ||
      Number(mileage) < 0
    ) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const index = this.availableCars.findIndex((x) => x.model === model);
    if (index === -1) {
      throw new Error(`${model} was not found!`);
    }

    const obj = this.availableCars[index];
    let horsepower = obj.horsepower;
    let price = Number(obj.price);

    if (obj.mileage <= desiredMileage) {
    } else if (obj.mileage - desiredMileage <= 40000) {
      price *= 0.95;
    } else {
      price *= 0.9;
    }

    this.availableCars.splice(index, 1);
    this.soldCars.push({ model, horsepower, soldPrice: price });
    this.totalIncome += Number(price);
    return `${model} was sold for ${price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return "There are no available cars";
    }

    let result = "-Available cars:";

    for (const obj of this.availableCars) {
      result += `\n---${obj.model} - ${
        obj.horsepower
      } HP - ${obj.mileage.toFixed(2)} km - ${obj.price.toFixed(2)}$`;
    }

    return result;
  }

  salesReport(criteria) {
    if (criteria === "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria === "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error("Invalid criteria!");
    }

    let result = `-${
      this.name
    } has a total income of ${this.totalIncome.toFixed(2)}$\n-${
      this.soldCars.length
    } cars sold:`;

    for (const obj of this.soldCars) {
      result += `\n---${obj.model} - ${
        obj.horsepower
      } HP - ${obj.soldPrice.toFixed(2)}$`;
    }

    return result;
  }
}

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
console.log(dealership.currentCar());
