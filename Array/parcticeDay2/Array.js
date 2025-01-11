// find all duplicate Element

// Input: [1, 3, 4, 2, 2, 3];
// Output: [2, 3];

// let str= [1, 3, 4, 2, 2, 3];
// let dec = {}

// for (let i = 0; i < str.length; i++) {
//     if (str[i] in dec) {
//         dec[str[i]]+=1
//     }
//     else {
//         dec[str[i]]=1
//     }
// }
// let res=[]
// for (key in dec) {
//     if (dec[key] > 1) {
//         res.push(Number(key))
//     }
// }
// console.log(res);

// find the intersection of two Array


// Input: [1, 2, 2, 1], [2, 2]
// Output: [2]

// Input: [4, 9, 5], [9, 4, 9, 8, 4]
// Output: [4, 9]

// let arr1 = [9, 4, 9, 8, 4];
// let arr2 = [4, 9, 5];

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
//     if (dec[arr2[j]] && dec[arr2[j]] > 0) {
//         res.add(arr2[j])
//         dec[arr2[j]]-=1
//     }
// }
// console.log([...res]);

// find the largest element in Array

// let arr = [10,5,4,9,3,7,8,6]
// arr = arr.sort((a, b) => a - b)
// console.log(arr[arr.length-1]);

// find all sub array sum equal to target


// Input: [10, 2, -2, -20, 10], target = -10
// Output: [[10, 2, -2, -20], [-20, 10]]
// Hint:

// let arr = [10, 2, -2, -20, 10];
// let target = -10
// let res=[]
// for (let i = 0; i < arr.length; i++) {
//     let currentsum = 0
//     let subarray=[]
//     for (let j = i; j < arr.length; j++) {
//         currentsum += arr[j]
//         subarray.push(arr[j])
//         if (currentsum === target) {
//             res.push([...subarray])
//         }
//     }
// }
// console.log(res);

// find maximu product of the array


// Input: [-10, -20, 1, 2]
// Output: 200

// let arr = [-10, -20, 1, 2];
// arr=arr.sort((a,b)=>a-b)
// let sum1 = arr[arr.length - 1] * arr[arr.length - 2]
// let sum2 = arr[0] * arr[1]
// let value = Math.max(sum1, sum2)
// console.log(value);

// find the missing Number

// let arr = [1, 2, 3, 5]
// let n = arr.length+1
// let sum = n * (n + 1) / 2
// let allsum=arr.reduce((a,b)=>a+b,0)
// console.log(sum-allsum);

// merge two sorted array

// let arr1 = [1, 2, 3, 5]
// let arr2 = [4, 6, 7]

// let i = 0
// let j = 0
// let res=[]
// while (i<arr1.length && j<arr2.length) {
//     if (arr1[i] > arr2[j]) {
//         res.push(arr2[j])
//         j++
//     }
//     else {
//         res.push(arr1[i])
//         i++
//     }
// }

// while (i < arr1.length) {
//     res.push(arr1[i]);
//     i++;
// }

// while (j < arr2.length) {
//   res.push(arr2[j]);
//   j++;
// }

// console.log(res);



// move all zero to the end


// let arr = [1, 0, 3, 0, 0]
// let zero = arr.filter(m => m == 0)
// let num = arr.filter(m =>m !== 0)
// console.log(num.concat(zero));






