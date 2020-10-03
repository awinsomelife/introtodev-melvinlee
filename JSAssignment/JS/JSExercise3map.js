/**Problem Statement
 * 1. Function with 2 arguements
 * 2. The 2 arguements should be arrays of numbers
 * 3. Return one output. The output is an array of numbers.
 *  - Sum of the numbers provided in the input arrays.
 * 
 * Input
 * Argument 1- Array (1,2) / single dimensional array
 * Arguement 2- Array (2,3)
 * 
 */

var array1 = [1,2]
var array2 = [2,3]

function sumOfArray (array1, array2){

var array3 = array1.map(function(value, index){
    return array2[index]; + value;;
    
})
console.log(array3);
}