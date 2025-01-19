// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// Output: [3, 4, 5, 1, 2];


let arr = [0, -1, 2];
let k = 4
k = k % arr.length;
// console.log(arr.length)

// Slice the array into two parts and rearrange
const part1 = arr.slice(-k );
console.log(part1)
const part2 = arr.slice(0, arr.length - k);
console.log(part2);
console.log(part1.concat(part2));


// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [0, -1, 2], (k = 4);
// Output: [2, 0, -1];


