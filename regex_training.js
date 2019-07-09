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

//Matching characters that occur one or more times
let difficultSpelling = "Mississippi";
let repeatRegex = /ss+/gi; // Change this line
let repeatResult = difficultSpelling.match(repeatRegex);
console.log(repeatResult, "Matching chars that occur one or more times.")

//Matching characters that occur 0 or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrbgh!";
let chewieRegex = /Aa*a/; // Will match Aa and repeats of "a"
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult, " Matching chars that occur 0 or more times");

//Matching the smallest possible part of a pattern (lazy matching)
let text = "<hhh1111>Winter is coming</h1><h1>";
// Return only the <h1> tag
let winterRegex = /<h*?1>/; //"*"" matches 0 or more occurances of "h" and '?' means match only the smallest part of the string that matches
let winterResult = text.match(winterRegex);
console.log(winterResult, "Lazy matching smallest possible part of a pattern in the string")

// Matching patterns at the beginning of a string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // "^" symbol will match Cal if it is at the beginning of the string."
let calResult = calRegex.test(rickyAndCal);
console.log(calResult, " Matching pattern at beginning of a string");

//Matching pattern at the end of a string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; //$ matches pattern to end of the string
let cabooseResult = lastRegex.test(caboose);
console.log(cabooseResult, " Matching pattern at end of string");

let alphaSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // '\w' matches alphanumeric characters and is = to [A-Za-z0-9_]
let alphaResult = alphaSample.match(alphabetRegexV2).length;
console.log(alphaResult, "using \w to match alpha numeric characters in a string.");

// Matching anything that is not alphanumeric
let nonAlphaSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // '\W' matches anything that is not alphanumeric characters and is = to [^A-Za-z0-9_]
let nonAlphaResult = nonAlphaSample.match(nonAlphabetRegex).length;
console.log(nonAlphaResult, " Matching anything that is not alphanumeric and underscore")

// Matching digits or numbers only
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // '\d' symbol matches only numbers
let numResult = numString.match(numRegex).length;
console.log(numResult, "Amount of numbers in the string")

// Matching non-digit characters 0-9
let nonnumString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // '\D' symbol matches anything that isn't a number 0-9
let nonNumResult = numString.match(noNumRegex).length;
console.log(nonNumResult, "Matches characters that aren't a number 0-9");

//Match usernames that follow this criteria:
// 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// 2) Username letters can be lowercase and uppercase.
// 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
let username = "JackOfAllTrades007";
// "^[a-z]{2,}" matches 2 or more alphabet characters at the beginning of the string.  "\d*$" matches 0 or more numbers at the end of the string.  Case is ignored.
let userCheck = /^[a-z]{2,}\d*$/i;
let userResult = userCheck.test(username);
console.log(userResult, `Username: ${username}`, " Match usernames that follow specific criteria")

//Matching whitespace and other hidden characters
let sample = "Whitespace is important in separating words";
// '\s' matches white space as well as other characters, similar to the character class [ \r\t\f\n\v]
let countWhiteSpace = /\s/g; 
let whiteResult = sample.match(countWhiteSpace);
console.log(whiteResult, "Matching whitespace chars")

//Matching all non-whitespace characters
let nonWhitespace = "Whitespace is important in separating words";
//This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v]
let countNonWhiteSpace = /\S/g; 
let noWhiteResult = nonWhitespace.match(countNonWhiteSpace);
console.log(noWhiteResult, "Matching non-whitespace characters")

//Match a certain range of repeating characters
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Match between 3 and 6 repeating h's.  Also matches "Ohhhhhh no".
let ohResult = ohRegex.test(ohStr);
console.log(ohResult, "Matching specific range of repeating characters.")

//Match repeating characters by setting a min limit but no upper bounds
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Matches at least 4 repeating z's
let haResult = haRegex.test(haStr);
console.log(haResult, "Matching min limit of repeating chars.")

// Matching an exact number of repeating characters
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Matches exactly 4 repeating "m's".
let timResult = timRegex.test(timStr);
console.log(timResult, "Matches exactly 4 repeating 'm' characters.")

// Using regex to check for all or none match in a pattern
let favWord = "favorite";
let favRegex = /favou?rite/; // Match regardless if the "u" exists or doesn't exist
let favResult = favRegex.test(favWord);
console.log(favResult, "Matching with optional characters.");

// Using 'lookahead' matching to check if a pattern matches
let sampleWord = "astronaut22";
// (?=\w{5,}) looks ahead in the string and matches any characters that are at least 5 letters long.
// (?=\D*\d{2}) looks ahead and matches 0 or more repeating nondigit characters and matches only 2 digit characters.
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
let pwResult = pwRegex.test(sampleWord);
console.log(pwResult, "Matches passwords that are greater than 5 characters long and have two consecutive digits.");

// Reuse patterns using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // The \1 represents the capture group pattern in parenthesis
let reResult = reRegex.test(repeatNum);

// Using regex to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey"; 
// The first argument is the regex to search for and the second is the pattern to replace it with.
let replaceResult = huhText.replace(fixRegex, replaceText);
console.log("search and replace a pattern.", replaceResult)

//Remove whitespace from beginning and end of a string with regex
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; //Matches repeating whitespace chars at the beginning or at the end.
let wsResult = hello.replace(wsRegex,""); //Replaces matching pattern with no space.
console.log("removing whitespace from string", wsResult);
