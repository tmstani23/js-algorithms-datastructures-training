//Using console.log to identify the type of a variable
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven, typeof three)

//Using "\" character to escape nested quotes in a string
//The backspace must be added before each conflicting quote char
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

// Debugging variable equality
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);

// Catch missing parenthesis after a function call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
//The getNine function reference is saved as a variable
let wrongResult = getNine;
//Here the getNine function is called and the return value is set to the
//right result variable
let rightResult = getNine();
console.log(wrongResult, rightResult);

//Catching arguments raised in the wrong order
function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
let correctPower = raiseToPower(base, exp);
console.log(power, correctPower);

// Catching index errors that are off by one
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Skips the first index 0 and loops too many times at the end
    for (let i = 1; i <= len; i++) {
      console.log(firstFive[i]);
    }
    // Captures all indices and returns the correct number sequence
    for (let i = 0; i < len; i++) {
        console.log(firstFive[i]);
    }
}
countToFive();

//Catching issues with not re-initializing variables inside a loop
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // row must be reset to an empty array here or the stacking row values will continue to be added from previous loops
      row = [];
      // Adds the m-th row into newArray
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      console.log(row);
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.table(matrix);

//Preventing infinite loops with a valid terminal condition
function myFunc() {
  // The below loop condition will never be met and this will result in an infinite loop
  // for (let i = 1; i != 4; i += 2) {
  //   console.log("Still going!");
  // }
  // Here the i value is set to <= 4 and the loop will now end
  for (let i = 1; i <= 4; i += 2) {
    if (i = 4) console.log("Loop ended!");
  }
}
myFunc();
  