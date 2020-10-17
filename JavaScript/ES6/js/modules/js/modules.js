//Modules are basic behaviours exposed as functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b; 
}

function division(a, b) {
    return a / b; 
}

export {
    add as add,
    subtract as minus,
    multiply as multiply,
    division as division
};

/*
1. Create a js file to create a module
2. Create another js file to use it
3. Create a module
4. Export the module so that I can use it
5. Import the module in the 2nd js file
6. Use the module/**
 */

 