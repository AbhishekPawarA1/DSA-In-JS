// Write a function in JavaScript to find the maximum product of any two numbers in a given array.

// Example:

// javascript
// Copy code
// Input: [1, 20, 3, 10, 5]
// Output: 200 (20 * 10)

// Input: [-10, -20, 1, 2]
// Output: 200(-10 * -20)


let str = [-10, -20, 1, 2];

str = str.sort((a, b) => a - b)
console.log(str);
n = str.length - 1 

let sum1 = str[n - 1] * str[n]
let sum2 = str[0] * str[1]

console.log(Math.max(sum1, sum2))







