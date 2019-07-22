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

//Set both instances of animal to include the animal prototype
Cat.prototype = Object.create(Animal.prototype);
Bear.prototype = Object.create(Animal.prototype);

//Set both instances of animal to include each types constructor prototype
Cat.prototype.constructor = Cat;
Bear.prototype.constructor = Bear;

//Add methods to Cat and Bear prototypes
Cat.prototype.meow = () => console.log("Meeooooooowww. meew");
Bear.prototype.growl = () => console.log("RAWRRR");

//Create new instances of each type of animal object
let mimi = new Cat('Mimi');
let blackBear = new Bear('Chuck');

//Each cat and bear now inherits Animal's eat method as well as their unique methods meow and growl
console.log("Adding prototype methods to super and subclass objects")
mimi.meow()
blackBear.growl()
mimi.eat()
blackBear.eat();


