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