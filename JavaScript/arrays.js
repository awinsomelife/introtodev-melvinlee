var array1 = [1,2,3]
var array2 = [2,10,4]

function addArrays() {
    var sum = array1.map(function(num, idx){
        return num+array2[idx];
    })
    return sum;
}

function addNumbersInArray1() {
 var sum = array1.reduce(function(start, value){
     return start+=value;
     //0+1=1
     //1+2=3
     //3+3=6
 },0)
    return sum;
}

function filterArray1() {
    var filteredvalues = array1.filter(function(value){
        return value > 1;
    });
    return filteredvalues;
}

/** filter numbers from an array
 * 
 * 1. for loop = check 
 */