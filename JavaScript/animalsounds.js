function dogsound(){
    alert("Dog Barks")
}
function horsesound()
{
    alert("Horse Neighs")
}
function catsound(){
    alert("Cat Meows")
}

/**
 * A dog barks
 * 
 * 1. What is my entity/class - dog.
 * 2. What is the property of my entity - 2 eyes, 4 legs, if it is a pet
 * 3. What is the behaviour - barks
 * 4. What is my class / entity type of - dog is it a type of animal
 * 5. Can I use common attributes from the type of my entity?
 */
//Dog, Cat, and Horse are all animals.
// 1. Animal
//2. Property
//3. Behaviour

 function Animal(sound) {
    this.sound = sound;}

//Class/Constructor for that class
function Dog(isdogapet) {
    this.isdogapet = isdogapet;

 }
//Dog is an animal

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;



 var dog1 = new dog(true);
 var dog2 = new dog(false);






