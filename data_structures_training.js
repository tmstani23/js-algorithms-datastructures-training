// Demonstrating setting an array containing multiple data types
let yourArray = ["truth", 3.14, true,{id: true}, [1,2], "calvinAndHobbes"]; 
console.log("an array with many datatypes", yourArray);

// Re-assigning an array value using its index
let myArray = ["a", "b", "c", "d"];
// Here the value at index 1 is reset to the new string
myArray[1] = "Bee not b"
console.log("Updating value in array", myArray);

//Demonstrating adding values to an array at the beginning and at the end
function mixedNumbers(arr) {
    // unshift adds the values at the beginning of the array
      arr.unshift('I', 2, 'three');
    // push adds the values at the end of the array
      arr.push(7, 'VIII', 9);
    return arr;
  }
  console.log("Adding values at start and end of array", mixedNumbers(['IV', 5, 'six']));

// Demonstrating removing values at beginning and end of an array
function popShift(arr) {
    let popped = arr.pop(); // Last value in array is removed and saved as popped variable
    let shifted = arr.shift(); // First value is removed
    console.log(arr);
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Using splice to remove array elements beginning at an index
function sumOfTen(arr) {
  // Here 2 elements are removed beginning at index 1 (second element)
  arr.splice(1,2)
  // Sum the array elements
  return arr.reduce((a, b) => a + b);
}
console.log("Removing array elements at an index location", sumOfTen([2, 5, 1, 5, 2, 1]));

//Using splice to remove array elements and replace with new
function htmlColorNames(arr) {
  //Remove the first two elements in the array and replace
  arr.splice(0,2,"DarkSalmon", 'BlanchedAlmond')
  return arr;
} 
console.log("Using splice to remove and replace elements", htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//Using slice to extract array elements to a new array
function forecast(arr) {
  //Extract elements 2 and 3 (but not 4) to a new array
  newArr = arr.slice(2,4)
  return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Algorithm that takes 2 arrays and inserts the first array into the second at the provided index n
function frankenSplice(arr1, arr2, n) {
  //Copy the input arr2 using spread operator to avoid mutating arr2
  let newArr2 = [...arr2]
  //loop backwards through the arr1 array
  for(let i = arr1.length - 1; i >= 0; i--) {
    //insert arr1 elements into the copied array
    newArr2.splice(n,0,arr1[i]);
  }
  
  console.log('frakenslice', newArr2);
  console.log(arr2);
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Using spread operator to copy all elements of an array into a new array
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // All elements of the input array are copied with spread operator and pushed into newArr
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log("Using spread operator to copy all elements of an array into a new array", JSON.stringify(copyMachine([true, false, true], 2)));

//Combining arrays with spread operator
function spreadOut() {
  let fragment = ['to', 'code'];
  //Here the fragment array is inserted into the sentence array
  let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}
console.log('combining arrays with spread operator', spreadOut());

//Checking if an element exists within an array using indexOf
function quickCheck(arr, elem) {
  // Check if 'mushrooms' exists in the array and return true if it does else return false
  return arr.indexOf(elem) != -1 ? true : false
}
console.log('checking if an elem exists in an array', quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Using loops to iterate through an array
function filteredArray(arr, elem) {
  let newArr = [];
  // Loop through the array and check if current iterator contains input elem
  for (let i = 0; i < arr.length; i++) {
    //Push nested array to new array if elem is not found
    arr[i].indexOf(elem) == -1 ? newArr.push(arr[i]) : null
  }
  return newArr;
}


console.log("Using loops to iterate through nested arrays", JSON.stringify(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)))

//Accessing nested arrays using bracket notation
let nestedArray = [// first level
  
  [ //second level
    ['deep'], //3rd level
    [
      ['deeper'], //4th level
      [
        [
          'deepest' //5th level
        ]
      ]
    ]
  ]
];
//Access the value in the 5th level
console.log('accessing nested arrays ', JSON.stringify(nestedArray[0][1][1][0][0]))


//Demonstrating updating an object's properties and values
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Here foods object is updated with new properties and values;
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log("updating object properties ", foods);


//Updating nested object properties and values
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
//Bracket notation and dot notation can be used to access the nested data object
userActivity['data'].online = 45

console.log('updating nested object properties', JSON.stringify(userActivity));

//Using bracket notation to access property names
let fruits = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
//Check foods object for scanned item
function checkInventory(scannedItem) {
  // Bracket notation allows for dynamically checking an object property
    //Note: dot notation wouldn't work as the input is a string and will result in undefined
  return foods[scannedItem]
}
console.log("accessing properties with bracket notation", checkInventory("apples"));

//Demonstrating checking if an object has a property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

//Checks if specific users exist in user object
function isEveryoneHere(obj) {
  let usersToCheck = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  // If user doesn't exist in users object return false
  for (let i = 0; i < usersToCheck.length; i++) {
    // 'in' here checks if the property exists in the users object (similar to object.hasOwnProperty)
    if (usersToCheck[i] in users === false) {
      return false
    }
  }
  // If all users exist in users object return true
  return true;
}
console.log("Checking if all users exist in user object ", isEveryoneHere(users));

//Using dot and bracket notation to check how many users are online
let usersObj = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {
  // Check each user's online property and increment count if it is true
  let count = 0;
  for (let user in obj) {
    obj[user].online === true ? count++ : false;
  }
  return count;
}
console.log("using dot and bracket notation to access nested object properties ", countOnline(usersObj));


//Updating deeply nested arrays and objects within an object using bracket and dot notation
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Add the new friend to the friends array within the user obj  
  user['data'].friends.push(friend)
  return user['data'].friends

}
function addLocation(locationObj, newCity) {
  // Update the current location obj city property to the new city input 
  user['data'].location['city'] = newCity
  return user['data'].location['city']
}
console.log(addFriend(user, 'Pete'));
console.log(addLocation(user, 'Minneapolis'))

