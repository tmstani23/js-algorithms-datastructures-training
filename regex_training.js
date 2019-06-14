//Simple example using regex test method to test if the string contains the pattern: Hello
let myString = "Hello, World!";
let myRegex = /Hello/;
const result = myRegex.test(myString); 
console.log(result, " search for single words");

//Using | symbol to search string for any of the words
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let multipleResults = petRegex.test(petString);

console.log(multipleResults, "searching for many words using or operator");