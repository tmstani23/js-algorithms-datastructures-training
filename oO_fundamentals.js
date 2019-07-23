'use strict';

function Dog(name) {
    this.name = name;
    this.fur = "fluffy";
    this.breed = "Australian Shepherd"
  }
  
  Dog.prototype.numLegs = 4;
  Dog.prototype.numEyes = 2;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];

//separate properties that belong only to object from 
    //prototype properties shared by all objects
const separatePropTypes = (dogObj) => {
    for (let prop in beagle) { 
        beagle.hasOwnProperty(prop) ? ownProps.push(prop)
        : prototypeProps.push(prop)
    }
    console.log("separating ownProps and protoProps ", ownProps, prototypeProps)
}
separatePropTypes(beagle)


//Demonstrating verifying if a specific object is of constructor type
function Hog(name) {
    this.name = name;
}
//Check if Larry is a Hog object
let larry = new Hog("Larry");
function joinDogFraternity(candidate) {
    return candidate.constructor === Hog ? true : false
}
console.log(joinDogFraternity(larry))


//Checking where an Object's prototype comes from
function Cat(name) {
    this.name = name;
  }
let calico = new Cat("Snoopy");
console.log("Checking where an object's prototype comes from", 
//Check if calico gets its prototype from the Cat constructor
Cat.prototype.isPrototypeOf(calico))

//Demonstrating prototype chain
function Cog(name) {
    this.name = name;
  }
  let squirt = new Cog("Snoopy");
  //squirt inherits prototype from the Cog object
  Cog.prototype.isPrototypeOf(squirt);  // => true
  
  // Cog inherits prototype from the JS Object
 console.log('Cog inherits prototype from the JS Object supertype',  Object.prototype.isPrototypeOf(Dog.prototype));


 //Demonstrating prototype inheritance and unique prototype methods
function Cat(name) {
    this.name = name;
}

function Bear(name) {
    this.name = name; 
}

function Animal() { }

//Add an eat function to the animal prototype
Animal.prototype.eat = () => console.log('nom, nom, nom');
Animal.prototype.drink = () => console.log('sluuurp!');

//Set both instances of animal to include the animal prototype
Cat.prototype = Object.create(Animal.prototype);
Bear.prototype = Object.create(Animal.prototype);

//Set both instances of animal to include each types constructor prototype
Cat.prototype.constructor = Cat;
Bear.prototype.constructor = Bear;

//Add methods to Cat and Bear prototypes
Cat.prototype.meow = () => console.log("Meeooooooowww. meew");
Bear.prototype.growl = () => console.log("RAWRRR");

//Override the supertype Animals eat method for Cat
    //All Cat's will now have a different eat method
Cat.prototype.eat = () => console.log("crunch, crunch, lick, crunch");


//Create new instances of each type of animal object
let mimi = new Cat('Mimi');
let blackBear = new Bear('Chuck');

//Each cat and bear now inherits Animal's eat method as well as their unique methods meow and growl
console.log("Adding prototype methods to super and subclass objects")
mimi.meow()
blackBear.growl()
mimi.eat()
blackBear.eat();


//Demonstrating overriding supertype methods for subtype
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Here the fly method is added to the penguin prototype 
    //It overrides Bird's fly method.  Must have same method name to override
Penguin.prototype.fly = () => "Alas, this is a flightless bird."; 

let penguin = new Penguin();
console.log("Overriding supertype prototype methods:", penguin.fly());

