/**
 * Car- Super Class
 *
 * SUV- Type of Car
 * MPV
 * Hatchback
 *
 * SUV
 * Mercedes GLA- Object of A Types
 * BMW X3
 *
 * Define the properties and behaviours of each classes
 * Creates the classes
 * Create the inheritance relationship between the classes
 * Create objects of different types of cars
 */

function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function() {
    return this.brand
}

const Volkswagen = new Car("Volkswagen")

function carType(brand, SUV, Hatchback, MPV) {
    Car.call(this, brand);
    this.SUV = SUV; 
    this.Hatchback = Hatchback;
    this.MPV = MPV;
  }

  carType.prototype = Object.create(Car.prototype);

  carType.prototype.getSUV = function() {
    return this.SUV;
  };

  carType.prototype.getHatchback = function() {
    return this.Hatchback;
  };

  carType.prototype.getMPV = function() {
    return this.MPV;
  };

const carType = new CarType ("Mercedes","SUV");

console.log(
    'Car:',
    Car(),
  );

  console.log(
    'carType:',
    carType.getSUV(),
    carType.getHatchback(),
    carType.getMPV(),
  );