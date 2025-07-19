//problem solving

console.log(`Saqlain Aslam`);

// Problem 1
// Interchange the value of first index and second last index of an array?
let arr1 = [2, 3, 4, 56, 6];
console.log(arr1);

// solution 1 using third variable
console.log(`Third variable`);

let temp = arr1[0];
arr1[0] = arr1[4];
arr1[4] = temp;
console.log(`${arr1}`);

//solution2
console.log(`Array Destructuring`);

[arr1[0], arr1[4]] = [arr1[4], arr1[0]];
console.log(arr1);

//solution3
console.log(`Array Splice method`);
// Splice method is used to modify the array by addding, remmoving and replacing the content of array
arr1.splice(0, 1, arr1[4]);
arr1.splice(4, 1, 2);
console.log(arr1);

// Problem 2
// Make the length of array dynamic and take the inputs and length of array from the user

//solution
let length = parseInt(prompt("Enter the length of the array:"));
let arr2 = [];

for (let index = 0; index < length; index++) {
  let input = prompt(`Enter elemen ${index + 1}:`);
  arr2.push(input);
}

console.log(`Dynamic Array is: ${arr2}`);
