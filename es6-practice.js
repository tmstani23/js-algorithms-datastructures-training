function printManyTimes(str) {
    "use strict";
    //const is used when a variable will not need to be re-assigned
    const SENTENCE = str + " is cool!";
    // let is used when variable needs to be re-assigned.
    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
  }
  printManyTimes("freeCodeCamp");

//A function demonstrating that const does not make an obj or variable immutable.
  const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // s = [2,5,7] would fail because s is a constant
  //Individual values within the s array can still be re-assigned.
  s[0] = 2;
  s[1] = 5;
  s[2] = 7

  return console.log(s);
}
editInPlace();

//A function demonstrating that an object can be frozen to make it immutable.
function freezeObj(changeVal) {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    //Here the MATH_CONSTANTS variable is locked down:
    Object.freeze(MATH_CONSTANTS);
  
    //A test to try to adjust the PI property in the frozen MATH_CONSTANTS obj.
    try {
      MATH_CONSTANTS.PI = changeVal;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
const PI = freezeObj(150);
  