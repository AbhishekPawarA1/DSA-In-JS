
// Question 21: Find All Subarrays with a Given Sum
// Problem:
// Write a function in JavaScript to find all subarrays of an array whose elements sum up to a given target value.

// Example:

// javascript
// Copy code
// Input: [1, 2, 3, 4, 5], target = 5
// Output: [[2, 3], [5]]

// Input: [10, 2, -2, -20, 10], target = -10
// Output: [[10, 2, -2, -20], [-20, 10]]
// Hint:

// Use nested loops to generate all subarrays and calculate their sum.
// Optimize by using a prefix sum or hash map for a better solution if needed.


let arr = [10, 2, -2, -20, 10];
let target = -10;

let result = [];
for (let i = 0; i < arr.length; i++) {
    let currentsum = 0
    let subarray=[]
    for (let j = i; j < arr.length; j++) {
        currentsum += arr[j]
        subarray.push(arr[j])
        if (currentsum == target) {
            result.push([...subarray])
        }
    }
}
console.log(result);
 
