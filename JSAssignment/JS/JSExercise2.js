alert("Hello World! Welcome to Melvin's Webpage!");
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
        txt = "Please try again!";
    }   else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt; 
    }