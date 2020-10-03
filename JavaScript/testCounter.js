/**
 * I want to create a counter that can be incremented by a function
 * or decremented by a function
 * or I can get the current value of the counter by a function
 * or I can reset the counter to zero
 */

/**How many functions should I create to cater to the four behavioural requirments? */

//One Function with a Loop
/**
 * 1. If Increment Button is clicked, then the counter should increase by 1. 
 */

function incrementcount() {
    count++;
    alert(count);
}

function decrementcount() {
    count--;
    alert(count);
}

function getcount() {
    alert(count);
}

function reset() {
    count=0
    alert(count);
}