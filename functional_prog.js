//Demonstrating higher-order and lambda functions in functional programming

//The two prepareTea functions are called lamda functions in fp as they are functions passed as parameters or returned in another function.
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

//getTea is a higher order function in fp as it is a function that accepts other functions as arguments
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  //create cups of tea up to numOfCups
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    //Here the first param function reference is used to call the function
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

//Make 27 cups of green tea and 13 cups of black tea
// Here the reference to prepareTea functions are passed as an argument
const tea4GreenMe = getTea(prepareGreenTea, 27); 
const tea4BlackMe = getTea(prepareBlackTea, 13); 

console.log("Demonstrating higher-order and lambda functions: ",
  tea4GreenMe,
  tea4BlackMe
);


//Demonstrating pure functions
const fixedValue = 4;
// Function is a pure function as it does not change anything outside itself
function incrementer (incrementVal) {
  return incrementVal + 1
}

var newValue = incrementer(fixedValue);
//fixedValue is not changed or effected in any way by incrementer function
console.log("incrementer is a pure function", fixedValue);