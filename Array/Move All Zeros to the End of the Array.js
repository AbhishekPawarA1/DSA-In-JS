// Write a function in JavaScript to move all zeros in an array to the end while maintaining the order of non-zero elements.

// Example:

// javascript
// Copy code
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Input: [0, 0, 1]
// Output: [1, 0, 0]


// approach 1

function moveZero(array) {
    let allZero = []
    let allNum=[]
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            allZero.push(array[i])
        }
        else {
            allNum.push(array[i])
        }
    }
    return allNum.concat(allZero)
}
let array = [0, 1, 0, 3, 12];
console.log(moveZero(array));


// Approach 2

function Move(str) {
    let allzero = str.filter(m => m === 0)
    let allnum = str.filter(m =>m !== 0)
    return [...allnum,...allzero];
}
let str = [0, 0, 1];
console.log(Move(str));