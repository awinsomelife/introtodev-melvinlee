/**
 * filer numbers from an array
 * 
 * Type - number
 * 
 * [1,2,3,true, 'melvin'] -> [1,2,3]
 * 
 */

 var input = [1, 2, 3, true, 'melvin'];

 function filterNumbers (input) {
 //for lop to iterate over all the elements in the input array
 for (counter=0; counter < input.length; counter++) {
     console.log('element at ' + counter + "position is = " + input[counter] + "and its type is = " +
     typeof input[counter]);
     //if the type of input element is a number
     if (typeof input[counter] == 'number') {
         output[outputCounter] = input[counter];
         outputCounter++;
     }
 }
 console.log(output)
}

/**results is a variable that stores the output of the filter function 
 * filter function now
 *  filter values based on a condition
 * 
 * condition
 *  typeof element should be a number
*/

    var result = input.filter(function(value) {
        return typeof value == 'number';
    });



    console.log(result);

    /**
     * Slice and Splice
     * 
     * [1,2,3,4,5,6,7,8,9,10]
     * 
     * slice (2) = everything after removing the elements till the 2nd index (0,1)
     * splice = give me the elements that were removed
     *  
     */