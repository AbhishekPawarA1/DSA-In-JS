//  1  Rotate an array by k

// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// Output: [3, 4, 5, 1, 2];

// let arr = [1, 2, 3, 4, 5]
// let k = 3;

// let part1 = arr.slice(-k)
// let part2 = arr.slice(0, arr.length - k)
// let res=part1.concat(part2)
// console.log(res);


// 2 Find rhe maximum product of 2 number from an array

// Copy code
// Input: [1, 20, 3, 10, 5]
// Output: 200 (20 * 10)

// Input: [-10, -20, 1, 2]
// Output: 200(-10 * -20)

// let arr = [1, 20, 3, 10, 5];
// arr=arr.sort((a,b)=>a-b)

// let sum1 = arr[arr.length - 1] * arr[arr.length - 2]
// let sum2=arr[0]*arr[1]
// console.log(Math.max(sum1,sum2));


// 3 Move all Zero to the End

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Input: [0, 0, 1]
// Output: [1, 0, 0]

// let arr = [0, 0, 1];

// let zero = arr.filter((a) => a == 0)
// let num=arr.filter((a)=>a!==0)
// console.log(num.concat(zero));


// 4 find the missing number in the array

// Input: [1, 2, 4, 5], n = 5
// Output: 3

// Input: [3, 7, 1, 2, 8, 4, 5], n = 8
// Output: 6

// let arr = [1, 2, 4, 5];
// let n = arr.length + 1;

// let sum1 = n * (n + 1) / 2
// let allsum = arr.reduce((a, b) => a + b, 0)
// let res = sum1-allsum
// console.log(res);

// 5 find the intersection of two array


// Input: [1, 2, 2, 1], [2, 2]
// Output: [2]

// Input: [4, 9, 5], [9, 4, 9, 8, 4]
// Output: [4, 9]


// let arr1 = [1, 2, 2, 1]
// let arr2 = [2, 2]

// let dec = {}
// let res=new Set()
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] in dec) {
//         dec[arr1[i]]+=1
//     }
//     else {
//         dec[arr1[i]]=1
//     }
// }

// for (let j = 0; j < arr2.length; j++) {
//     if (dec[arr2[j]]) {
//         res.add(arr2[j])
//         dec[arr2[j]]-=1
//     }
// }

// console.log([...res]);


// 6 find the largest element in array

// Input: [1, 2, 3, 4, 5]
// Output: 5

// Input: [-1, -2, -3, -4]
// Output: -1


// let arr = [1, 2, 3, 4, 5];
// arr=arr.sort((a,b)=>a-b)
// let lastNum = arr[arr.length-1]
// console.log(lastNum);


// 7 find all duplicate

// Input: [1, 3, 4, 2, 2, 3];
// Output: [2, 3];


// let arr = [1, 3, 4, 2, 2, 3];

// let dec = {}
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in dec) {
//         dec[arr[i]]+=1
//     }
//     else {
//         dec[arr[i]]=1
//     }
// }
// let res=[]
// for (key in dec) {
//     if (dec[key] > 1) {
//         res.push(Number(key))
//     }
// }
// console.log(res);

// 8 Merge two sorted array

// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Input: [1, 2], [3, 4, 5]
// Output: [1, 2, 3, 4, 5]

// let arr1 = [1, 2]
// let arr2=[3, 4, 5]

// let i = 0
// let j = 0
// let res=[]
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] > arr2[j]) {
//         res.push(arr2[j])
//         j++
//     }
//     else {
//         res.push(arr1[i]);
//         i++
//     }
// }

// while (i<arr1.length) {
//     res.push(arr1[i])
//     i++
// }
// while (j < arr2.length) {
//   res.push(arr2[j]);
//   j++;
// }
// console.log(res);

// 9 find all subarray sum equal to target

// Input: [1, 2, 3, 4, 5], target = 5
// Output: [[2, 3], [5]]

// Input: [10, 2, -2, -20, 10], target = -10
// Output: [[10, 2, -2, -20], [-20, 10]]

// let arr = [1, 2, 3, 4, 5];
// let target = 5;
// let result=[]
// for (let i = 0; i < arr.length; i++) {
//     let res = []
//     let currentsum=0
//     for (let j = i; j < arr.length; j++) {
//         res.push(arr[j])
//         currentsum += arr[j]
//         if (currentsum == target) {
//             result.push([...res])
//         }  
//     }
// }
// console.log(result);














