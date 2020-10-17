/*Object Notation

1. Curly Braces
2. Key Value Pairs
3. Value has a type *


1. Create a js file
2. Create a js object car with properties -> brand, type of car, price
3. Stringify the object to print it on the console */

let car1 = {
    brand: 'Honda',
    typeOfCar: 'Hatchback',
    model: 'Jazz',
    price: '$80000'
}

let car2 = {
    brand: 'Mini',
    typeOfCar: 'Hatchback',
    model: 'Cooper',
    price: '$120000'
}

console.log(JSON.stringify(car1));
console.log(JSON.stringify(car2));
