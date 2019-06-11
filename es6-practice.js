function printManyTimes(str) {
    "use strict";
    //const is used when a variable will not need to be re-assigned
    const SENTENCE = str + " is cool!";
    // let is used when variable needs to be re-assigned.
    for(let i = 0; i < str.length; i+=3) {
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

  return console.log(s, "variable immutability with const");
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
      console.log(ex, "cannot re-assign immuntable/frozen object");
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
console.log(squaredIntegers, "chaining high order functions with arrow functions");

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
console.log(increment(5) + " default parameters"); // returns 6

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
console.log(sum(1, 2, 3) + " sum of args"); // 6


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

console.log(getTempOfTmrw(AVG_TEMPERATURES) + " Object destructuring and variable re-assignment."); // should be 79


//Using object destructuring for nested objects to re-assign variables
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // Here the tomorrow value object is extracted then the max value is assigned 
    // to new variable maxOfTomorrow.
  const {tomorrow: {max: maxOfTomorrow}} = forecast; // change this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)+" Nested object destructuring"); // should be 84.6

//Using destructuring to re-assign values in an array
let a = 8, b = 6;
(() => {
  "use strict";
  //Here the variables a and b are assigned to an array
  // The array is then destructured reversing the values
  [b, a] = [a, b]
})();
console.log(a); // should be 6
console.log(b, " Destructuring an array"); // should be 8


// Using array destructuring and spread operator to return a sub array
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Here the first two values of the source array are destructured to variables a,b
  // The rest of the source array is spread into a new array containing the remaining values
    // Note: spread operator cannot be used to catch a subarray that leaves out the last 
    // element of the initial array
  const [a,b, ...arr] = list;
  console.log(a, b, " New variables a,b");
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr, " Using array destructuring and spread operator"); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


// Using destructuring on arguments passed into a function
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";

  //Here the stats object is destructured to only its max and min values
  return function half({max, min}) {
    
    return (max + min) / 2.0;
  };
  //The stats object is passed into the half function and only the max, min values are copied

})();
//console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//Function demonstrating using template literals and es6 instring variables
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  //Here a string is returned that preserves spacing and includes the three failure results as li elements within an array
  const resultDisplayArray = 
  [`<li class="text-warning">${arr[0]}</li>`,
   `<li class="text-warning">${arr[1]}</li>`, 
   `<li class="text-warning">${arr[2]}</li>`
  ];

  return resultDisplayArray;
}
console.log(makeList(result.failure, " String template literals"));