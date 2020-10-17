//A person with first, age, and lastName
/**
 * store firstName and age of the person to new variables using object destruction
 */

 const person = {
     firstName: 'Michael',
     lastName: 'Dell',
     age: 42
 }

 const {firstName, lastName, age} = person; //person.id person[0]

console.log(firstName, lastName, age);

//Get Element at the fourth position
/*[1,2,3,4]
1 is in the 0th position, 2 is in the 1st position, 3 is in the 2nd position, 4 is in the 3rd position */

const arrayForTest = [3,4,9,8,2,5];
const fourthElement = arrayForTest[3];

console.log (fourthElement)

//Once we are back, take 5-10 minutes to write a function that takes numbers (either 2 or 3 arguments) as input and return the sum of these numbers
//and copy paste your codes here


let arrayOfNumbers = [1,3,4,6,8,22,1];

let [first, second, ...rest] = arrayOfNumbers;


