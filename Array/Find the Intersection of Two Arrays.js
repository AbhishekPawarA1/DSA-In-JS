// Question 17: Find the Intersection of Two Arrays
// Problem:
// Write a function in JavaScript to find the intersection of two arrays. The intersection contains elements that are common in both arrays, without duplicates.

// Example:

// javascript
// Copy code
// Input: [1, 2, 2, 1], [2, 2]
// Output: [2]

// Input: [4, 9, 5], [9, 4, 9, 8, 4]
// Output: [4, 9]
// Hint:

// Use a Set to store unique elements of one array.
// Iterate through the second array to check for matches in the set.

let arr1 = [1, 2, 1,2,4,3];
let arr2 = [2, 2,,4,3,2];
let dec = {}
let result = []

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] in dec) {
        dec[arr1[i]]+=1
    }
    else {
        dec[arr1[i]]=1
    }
}
for (let j = 0; j < arr2.length; j++) {
    if (dec[arr2[j]]) {
    result.push(arr2[j]);
    dec[arr2[j]] -= 1;
  }
}

console.log(result);
