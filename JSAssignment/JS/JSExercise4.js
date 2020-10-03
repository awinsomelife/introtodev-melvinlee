function myCar(typeOfCar){
    this.typeOfCar = typeOfCar
}

function mySuv(carBrand){
    this.carBrand = carBrand
}

function myHatchback(carBrand){
    this.carBrand = carBrand
}

function myMpv(carBrand){
    this.carBrand = carBrand
}

mySuv.prototype = new myCar();
mySuv.prototype.constructor = mySuv;
var mySuv = new mySuv ("MercedesGLA,"+ " " + "BMWX3");

myHatchback.prototype = new myCar();
myHatchback.prototype.constructor = myHatchback;
var myHatchback = new myHatchback("Volkswagen Beetle,"+ " " + "Mini Cooper");

myMpv.prototype = new myCar();
myMpv.prototype.constructor = myMpv;
var myMpv = new myMpv ("Renault Grand Scenic,"+ " " + "Honda Odyssey");

  