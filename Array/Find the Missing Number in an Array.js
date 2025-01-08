// Question 16: Find the Missing Number in an Array
// Problem:
// Write a function in JavaScript to find the missing number in an array of integers from 1 to n. The array contains n-1 integers with no duplicates.

// Example:

// javascript
// Copy code
// Input: [1, 2, 4, 5], n = 5
// Output: 3

// Input: [3, 7, 1, 2, 8, 4, 5], n = 8
// Output: 6
// Hint:

// Use the formula for the sum of the first n natural numbers:
// Sum = 𝑛 × ( 𝑛+1) / 2
// Subtract the sum of the array elements from the calculated sum to find the missing number.

let arr = [1, 2, 4, 5]

let n = Math.max(...arr)
let sum = n * (n + 1) / 2;
let allsum = arr.reduce((a, b) => a + b, 0);
let value = sum - allsum
console.log(value);











