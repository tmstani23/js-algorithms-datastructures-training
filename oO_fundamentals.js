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
