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

//Using i operator to ignore case when matching a string
let ignoreString = "freeCodecamp";
let fccRegex = /freecodecamp/i; // Change this line
let ignoreResult = fccRegex.test(ignoreString);
console.log(ignoreResult, " ignore case regex");

//Using regex match function to extract matching words into an array.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; //Here the pattern is set to look fro the string coding
//Here the match function is invoked to extract any matches of the pattern into a new array.
let resultMatch = extractStr.match(codingRegex);
console.log(resultMatch, " extracting string with match") 

// Using regex match function to return more than one extracted result string
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // the 'g' flag searches for all occurrences of a word
let twinkleResult = twinkleStar.match(starRegex); 
console.log(twinkleResult, "matching more than one pattern")

//Matching all strings that contain a pattern using the regex wildcard symbol '.'
let wildcardStr = "Let's have fun with regular expressions!";
let unRegex = /un./; //Using the '.' symbol here means match all that contain the 'un' letters.
let wildcardResult = unRegex.test(wildcardStr);
console.log(wildcardResult, " Matching all examples of character/s")

//Using regex character class grouping to find all examples of a group within a string
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //Brackets are used to specify a group of characters to match
let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult, 'Using character class grouping to match a specified group of characters')

// Defining a range of characters within a class group
let quoteFox = "The quick brown fox jumps over the lazy dog.";
// Here a range of letters, a-z, will match.  This way one doesn't need to type all matching characters in a group.
let alphabetRegex = /[a-z]/gi; //Matches all characters a-z with any case
let rangeResult = quoteFox.match(alphabetRegex);
console.log(rangeResult, "Matching all characters in a range with class groups.")

//A matching range can also contain both letters and numbers in a single class group
let blueberryQuote = "Blueberry 3.141592653s are delicious.";
let blueRegex = /[h-s2-6]/gi; // Matches all characters h-z and 2-6 in any case
let bothRange = blueberryQuote.match(blueRegex); 
console.log(bothRange, "Matching both letters and numbers in a single group");

// Matching characters that don't fit a specific pattern - negation using '^' symbol.
let blindSample = "3 blind mice.";
let negateReg = /[^0-9aeiou]/gi; // Matches all characters that aren't a number or vowel.
let negateResult = blindSample.match(negateReg);
console.log(negateResult, " Negative results of a pattern");