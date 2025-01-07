//string

// anagram
// palindrome
// frequency
// longest string in word
// generate all substring
// first non repating character
// substring of leangth k


// Array

//find max product
// move all zero to the end
// rotate an array

// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// Output: [3, 4, 5, 1, 2];


// let str = [1, 2, 3, 4, 5]
// let k = 3;

// let part1 = str.slice(-k)
// console.log(part1);
// let part2 = str.slice(0, str.length - k)
// console.log(part2);

// console.log(part1.concat(part2));


// Write a function in JavaScript to move all zeros in an array to the end while maintaining the order of non-zero elements.

// Example:

// javascript
// Copy code
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Input: [0, 0, 1]
// Output: [1, 0, 0]

// let str = [0, 0, 1];


// let zero = str.filter((m) => m == 0)
// let num = str.filter(m => m !== 0)
// console.log(num.concat(zero));
// Write a function in JavaScript to find the maximum product of any two numbers in a given array.

// Example:

// javascript
// Copy code
// Input: [1, 20, 3, 10, 5]
// Output: 200 (20 * 10)

// Input: [-10, -20, 1, 2]
// Output: 200(-10 * -20)

// let str = [-10, -20, 1, 2];
// str = str.sort((a, b) => a - b)
// n=str.length-1
// let sum1 = str[n] * str[n - 1]
// let sum2 = str[0] * str[1]

// let maxproduct = Math.max(sum1, sum2)
// console.log(maxproduct);



//string

// function Anagram(str1, str2) {
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


// let str1 = "listen";
// let str2 = "silent";
// console.log(Anagram(str1, str2));


// function Paindrome(str1) {
//     str1=str1.toLowerCase()
//     let left = 0
//     let right = str1.length-1
//     while (left<right) {
//         if (str1[left] != str1[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

// let str1 = "AbbbcbbbA"
// console.log(Paindrome(str1));



// function Allsubstring(str) {
//     for (let i = 0; i < str.length; i++) {
//         let res=""
//         for (let j = i; j < str.length; j++) {
//             res += str[j]
//            console.log(res);
//         }
//     }
// }


// function Allsubstring(str, k) {
//     let res=[]
//     for (let i = 0; i <= str.length-k; i++) {
//         res.push(str.slice(i,i+k))
//     }
//     return res
// }


// let str = "Vishal"
// let k = 3;
// console.log(Allsubstring(str,k)); 