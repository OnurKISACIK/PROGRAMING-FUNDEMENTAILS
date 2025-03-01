//? WHEN WE USE "THIS" OBEJECT CREATING
//? WHEN WE USE "THIS" INSIDE THE FUNCTION IT CALL THE FUNCTION TO WORK
class Veichle {
  constructor(veichleType, veichleModel, veichleParts, veichleFuel) {
    this.type = veichleType;
    this.model = veichleModel;
    this.parts = veichleParts;
    this.parts.quality = this.parts.engine * this.parts.power;
    this.fuel = veichleFuel;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss;
  }
}

let parts = { engine: 6, power: 100 };

let vehicle = new Veichle("a", "b", parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality);
