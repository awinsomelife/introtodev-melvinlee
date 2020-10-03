/**
 * Is to create a full name of a person from first name and last name
 */

 function createFullName() {
    var firstName = document.getElementById ('firstName').value; 
    var lastName = document.getElementById ('lastName').value;
    alert (firstName + " " + lastName);
 }

 var myFullName = function (firstName, lastName) {
     return firstName + " " + lastName
 }