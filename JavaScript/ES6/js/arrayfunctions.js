var array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log(array1.find(findfunction));

function findfunction(value, index, array) {
    if(value > 10) {
        return true;
    }
}

console.log(array1.find((value, index, array) => {
    if(value > 10) {
        return true;
    }
}));

console.log(array1.find((value, index, array) => {return value > 10;}));