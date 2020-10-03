function Car(TypeofCar) {
    this.TypeofCar = TypeofCar;
}
function SUV(BrandModel) {
    this.BrandModel = BrandModel;
}
function MPV(BrandModel) {
    this.BrandModel = BrandModel;
}
function Hatchback(BrandModel){
    this.BrandModel = BrandModel;
}
SUV.prototype = new Car();
SUV.prototype.constructor = SUV;
var SUV = new SUV("MercedesGLA,"+ " " + "BMWX3");
MPV.prototype = new Car();
MPV.prototype.constructor = MPV;
var MPV = new MPV("Honda Odessy,"+ " " + "Toyota Sienta");
Hatchback.prototype = new Car();
Hatchback.prototype.constructor = Hatchback;
var Hatchback = new Hatchback("Ford Fiesta,"+ " " + "Mazda 3");