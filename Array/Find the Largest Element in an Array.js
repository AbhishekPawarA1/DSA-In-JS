// Question 18: Find the Largest Element in an Array
// Problem:
// Write a function in JavaScript to find the largest element in an array.

// Example:

// javascript
// Copy code
// Input: [1, 2, 3, 4, 5]
// Output: 5

// Input: [-1, -2, -3, -4]
// Output: -1
// Hint:

// Use a simple loop to iterate through the array and track the largest element encountered.


let arr = [-1, -2, -3, -4];
let val=-99999999
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
        val=arr[i]
    }
}
console.log(val);
// arr = arr.sort((a, b) => a - b)
// let n = arr.length
// let last = arr[n - 1]
// let first = arr[0]
// console.log(Math.max(last,first));