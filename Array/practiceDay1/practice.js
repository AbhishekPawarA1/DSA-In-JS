// Find the Intersection of Two Arrays   done
// Find the Missing Number in an Array    done
// move all zero         done
// rotate an array from k     done



// let arr = [1, 2, 3,4, 5,6,7,9,10]

// let n = Math.max(...arr)
// let sum = n * (n + 1) / 2;
// let allsum = arr.reduce((a, b) => a + b, 0);
// let value=sum-allsum
// console.log(value);


// let arr1 = [1, 2, 3, 4]
// let arr2 = [4, 3]
// let result=[]
// let dec={}
// for (let i = 0; i <arr1.length; i++) {
//     if(arr1[i] in dec) {
//         dec[arr1[i]]+=1
//     }
//     else {
//         dec[arr1[i]]=1
//     }
// }
// for (let j = 0; j < arr2.length; j++) {
//     if (dec[arr2[j]]) {
//         result.push(arr2[j])
//         dec[arr2[j]]-=1
//     }
// }

// console.log(result);

// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// // Output: [3, 4, 5, 1, 2];
// let arr = [1, 2, 3, 4, 5]
// let k = 2;

// let part1 = arr.slice(-k)
// let part2 = arr.slice(0, arr.length - k)

// console.log(part1.concat(part2));



// let arr = [2, 3, 4, 0, 6, 0, 9];
// let zero = []
// let num=[]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         zero.push(arr[i])
//     }
//     else {
//         num.push(arr[i])
//     }
// }
// console.log(num.concat(zero));

// let zero = arr.filter((m) => m == 0);
// let nums = arr.filter((m) => m !== 0);
// console.log(nums.concat(zero));



// function Anagram(str1,str2) {
//     let dec = {}
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] in dec) {
//             dec[str1[i]]+=1
//         }
//         else {
//             dec[str1[i]]=1
//         }
//     }
//     for (let j = 0; j < str2.length; j++) {
//         if (!dec[str2[j]]) {
//             return false
//         }
//         else {
//             dec[str2[j]]-=1
//         }
//     }
//     for (key in dec) {
//         if (dec[key] !== 0) {
//             return false
//         }
//     }
//     return true
// }

// let str1 = "listen"
// let str2 = "silenp"
// console.log(Anagram(str1,str2));

