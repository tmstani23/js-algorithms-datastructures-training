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

//Function using demonstrating how arrow functions can be used to chain higher order functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  //Array is filtered to include only integers
  const squaredIntegers = arr.filter((number) => Number.isInteger(number) && number > 0) 
    //Remaining integers are multiplied by their exponent
    .map((int) => Math.pow(int, 2))    
  return squaredIntegers;
};
// Final array is sorted to include only positive integers squared
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Using default parameters within a function
const increment = (function() {
  "use strict";
  //If a value isn't passed in the value is set to 1
  return function increment(number, value = 1) {
    //If a value isn't passed in the number is incremented by the default of 1
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

//Demonstrating using Rest Operator with function parameters 
const sum = (function() {
  "use strict";
  //Here rest operator is used to transform all parameters into an array of parameters called args
  return function sum(...args) {
    //Reduce method is used on the arguments to sum each argument with the next in a series until the sum of arguments is attained
      //The 0 value is the intial value of the reduce.
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3) + " sum or args"); // 6


//Demonstration of using object destructuring to re-assign a variable
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  //Here a variable is created with the value of tomorrow from avgTemperatures
    //set to the variable tempOfTomorrow.
  const {tomorrow: tempOfTomorrow} = avgTemperatures ;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79