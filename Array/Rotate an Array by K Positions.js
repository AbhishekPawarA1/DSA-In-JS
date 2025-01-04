// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// Output: [3, 4, 5, 1, 2];


let arr = [1, 2, 3, 4, 5];
let k = 3
k = k % arr.length;
// console.log(arr.length)

// Slice the array into two parts and rearrange
const part1 = arr.slice(-k);
console.log(part1)
const part2 = arr.slice(0, arr.length - k);
console.log(part2);
console.log(part1.concat(part2));


