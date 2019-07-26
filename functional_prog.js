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


// A global booklist
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */

// Add your code below this line
function add (bookTitlesArray,bookName) {
  //Copy the booklist to avoid mutation
  let copyBookList = [...bookTitlesArray]
  //Add new book to copied booklist
  copyBookList.push(bookName);
  return copyBookList;
}

/* This function should remove a book from the list and return the list */
function remove (bookTitlesArray,bookName) {
  let copyBookList = [...bookTitlesArray]
  let bookIndex = copyBookList.indexOf(bookName);
  if (bookIndex >= 0) {
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
var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
 }
];

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