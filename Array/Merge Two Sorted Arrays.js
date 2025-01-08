// Question 20: Merge Two Sorted Arrays
// Problem:
// Write a function in JavaScript to merge two sorted arrays into a single sorted array.

// Example:

// javascript
// Copy code
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Input: [1, 2], [3, 4, 5]
// Output: [1, 2, 3, 4, 5]
// Hint:

// Use two pointers to traverse both arrays and merge them into a new sorted array.
// Handle any remaining elements after one of the arrays is fully traversed.

let arr1 = [1, 2];
let arr2 = [3, 4, 5];
let res = []
let i= 0;
let j = 0

while (i<arr1.length && j<arr2.length) {
    if (arr1[i]<arr2[j]) {
        res.push(arr1[i])
        i++
    } else {
        res.push(arr2[j])
        j++
    }
}

while (i < arr1.length) {
    res.push(arr1[i])
    i++
}

while (j < arr2.length) {
  res.push(arr2[j]);
  j++;
}

console.log(res) ;




// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let res = [];

// let allnum = arr1.concat(arr2);
// allnum = allnum.sort((a, b) => a - b);
// console.log(allnum);


