class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    printName() {
        console.log(this.name, this.age);
    }

    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}

var student = new Student('Vaibhav', 35);
console.log(student.id)

/**Car

SUV is a type of car-> GLA is an object of SUV, Hummer
MPV
Hatchback

*/

class Car {
    constructor (brand) {
        this.brand = brand;
    }
}

class SUV extends Car {
    constructor (brand, isAllTerrain){
        super (brand);
        this.isAllTerrain = isAllTerrain

    }
    isThisAnAllTerrainVehicle(){
        return this.isAllTerrain;
    }
    
}

let GLA = new SUV ('Mercedes', true);

console.log (GLA.isThisAnAllTerrainVehicle());
