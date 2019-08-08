//Import watchlist data
const watchList = require('./watchlist.js');


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
console.log("incrementer is a pure function", newValue);


// A global booklist
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
/* This function should add a book to the list and return the list */
// Add your code below this line
function add (bookTitlesArray,bookName) {
  //Copy the booklist to avoid mutation
  let copyBookList = bookTitlesArray == typeof Array ? [...bookTitlesArray] : []
  //Add new book to copied booklist
  copyBookList.push(bookName);
  return copyBookList;
}
/* This function should remove a book from the list and return the list */
function remove (bookTitlesArray,bookName) {
  //Set copyBookList var to an empty array if bookTitlesArray is not an array
  let copyBookList = bookTitlesArray == typeof Array ? [...bookTitlesArray] : []
  let bookIndex = copyBookList.indexOf(bookName);
  if (bookIndex >= 0) {
    //Splice can cause a type error here if the title doesnt exist in the array
    copyBookList.splice(bookIndex, 1);
    return copyBookList;
    }
}
//Add a book to booklist
var newBookList = add(bookList, 'A Brief History of Time');
//Remove a book
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
//Use highorder and lambda function to use result of add function callback as booklist parameter in remove function
var newestBookList = 
  remove(
    add(bookList, 'A Brief History of Time'), 
    'On The Electrodynamics of Moving Bodies'
  );

console.log("Initial Booklist/new Booklist: ", bookList, newestBookList);


// Demonstrating using map to extract values from objects while avoiding mutability
var rating = [];
//Here map is used to avoid mutability by performing a function on each iterated object and saving them in a new array
let parsedWatchList = watchList.map((val, index) => {
    let {Title, imdbRating} = val;
    return {
      title: Title,
      rating: imdbRating
    }
  }
)
rating = [...parsedWatchList];
console.log("Using map to extract object values to new array ", JSON.stringify(rating)); 


// Creating map function from scratch
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
  var newArray = [];
  // this is referring to the s array (check where myMap is called to find the this value)
  // each element in the this array gets the callback applied
  this.forEach((val) => newArray.push(callback(val)))
  return newArray;

};
var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);


//Using filter and map to return a new object with extracted values
var filteredList = watchList.map((iteratedObj) => {
  //Title and rating are deconstructed from the current iterated object
  let {Title, imdbRating} = iteratedObj;
  // New obj is returned containing only the title and imdb rating
  return {
    title: Title,
    rating: imdbRating
  }
}).filter((val) => {
    val = parseInt(val.rating) // convert rating to a number
    // add val to new array if it is >= 8.0
    return val >= 8.0;
  })
console.log("Using map and filter to parse objects and return transformed objects that fit the criteria", JSON.stringify(filteredList));


// Creating filter method from scratch to see how it functions
var s = [23, 65, 98, 5];
//Add new filter function to Array prototype
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // iterate through the array the filter method is called on
  this.forEach((val) => {
    // If the callback returns true on the passed in item add it to the new array
    if (callback(val) === true) {
      newArray.push(val)
    }
  })
  console.log(newArray);
  // Add your code above this line
  return newArray;
};
//Calling the new function with passed in callback
var new_s = s.myFilter(function(item){
  // If item is odd return true
  return item % 2 === 1;
});


//Demonstrating using slice to extract elements from an array.
    // Slice does not mutate the array and can be used to return a copy
function sliceArray(anim, beginSlice, endSlice) {
  // slice input array from indices based on function parameters
  let slicedArr = anim.slice(beginSlice, endSlice)
  return slicedArr;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log("Demonstrating slice to avoid immutability", sliceArray( inputAnim, 1, 3));


//More slicing
function nonMutatingSplice(cities) {
  // Start at index 0 and slice 3 items
  return cities.slice(0,3)
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//Demonstrating combining two arrays into one without mutating either array
function nonMutatingConcat(original, attach) {
  // concat joins two arrays from endpoint and beginning.  Doesn't mutate array
  let concatedArr = original.concat(attach);
  return concatedArr;
  
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));


//Using concat to add new array elements to the end of an array
function nonMutatingPush(original, newItem) {
  //Add new item array to the end of original array
  return original.concat(newItem);
}
var firstArr = [1, 2, 3];
var secondArr = [4, 5];
// Concat won't mutate the first or second array
console.log("Non-mutating push", firstArr, secondArr, JSON.stringify(nonMutatingPush(first, second)))


//Using filter and reduce to get avg rating of movies without mutability
var filteredWatchList = watchList.filter((iterObj) => {
  //If director is CN include the object in the new array
  let {Director, imdbRating} = iterObj;
  if(Director == "Christopher Nolan") {
    return true
  }
  return false
})
let averageRating = filteredWatchList.reduce((total, iterObj) => {
  let {imdbRating} = iterObj;
  let parsedRating = parseFloat(imdbRating)
  //Add up all the ratings
  let result = parsedRating + total;

  return result;
  
}, 0) / (watchList.length - 1) //Divide sum by number of ratings to get avg
console.log("Parse an object and return an avg using reduce", JSON.stringify(averageRating)); 


let alphaArr = ["a", "d", "c", "a", "z", "g"]
function alphabeticalOrder(arr) {
  
  return arr.sort((elem1, elem2) => {
    return elem1 > elem2;
  })
  
}
alphabeticalOrder(alphaArr);
console.log(alphaArr); //Original array is not mutated

// Sort the array in descending order
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let globalArrCopy = []
  //Copy the globalArray to avoid mutation
  globalArrCopy = globalArrCopy.concat(globalArray);

  return globalArrCopy.sort((elem1, elem2) => {
    return elem1 - elem2;
  })
}
console.log("Sorting an array without mutation", nonMutatingSort(globalArray));


//Function to split a string by words and remove any punctuation or other chars.
function splitify(str) {
  // Remove non-alpha numeric symbols
  let alphaNumericStr = str.replace(/[^a-z0-9]/gmi, " ")
  // Split string by spaces
  let finalStr = alphaNumericStr.split(" ")
  return finalStr;
  
}
console.log("Parsing strings without mutation:", splitify("Hello World,I-am code"));


//Demonstrating parsing a string by delimiter without mutating original str
function sentensify(str) {
  // Convert the string to array and split each elem by any non-alphnumeric
  let convertedStrToArr = str.split(/[^a-zA-Z0-9]/)
  // Convert new array back to str split by spaces
  let joinedStr = convertedStrToArr.join(" ");
  
  return joinedStr;

}
console.log("Parsing a str by delimiter:", sentensify("May-the-force-be-with-you"));


// Performing complex transformations on a string without mutation
var globalTitle = " Winter is  Coming";
function urlSlug(title) {
  //copy the string and set it to lowercase
  let copiedStr = title.toLowerCase()
    //Split the copied string by space characters into an array
    .split(/\s+/)
    //Filter the array to not include space elements
    .filter((elem) => {
      return elem == '' ? false : true
  })
    //join the new array into a string separated by -
    .join('-');

  console.log(copiedStr);
  return copiedStr;
}
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"


// Checking if all elements in an array are positive
function checkPositive(arr) {
  // Loop through each element in the array and return true all elems are pos
  return arr.every((elem) => {
    return elem > 0;
  })
}
console.log("Using every method to check if elems are pos: ", checkPositive([1, 2, 3, -4, 5]));


//Check if any elements are positive in an array
function checkIfPositive(arr) {
  //Loops through array elems and if any are > 0 returns true
  return arr.some((elem) => {
    return elem > 0
  })
}
console.log("Checking if any elems are positive using JS 'some' method: " , checkIfPositive([1, 2, 3, -4, 5]));

//Using currying to add 3 variables
//Useful for when you cant supply all arguments to a function at one time
function add(x) {
  //each function returns another function with a single variable
  return (y) => {
    return (z) => {
      return x + y + z;
    }
  }
}
console.log("using currying to add 3 numbers", add(10)(20)(30));