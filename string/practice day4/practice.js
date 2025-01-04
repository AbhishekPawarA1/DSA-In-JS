// reverse a sstring  done
// check if string is palindrome   done
// find the Frequecy          done
// replace all space          done
// check if satring is Anagram   done
// find the longest string        done
// find the first non repeating char       done
// find all substring       done
// substring of length of k     done
// rotate array from k


// let str = "Hello World"

// arr = str.split("")
// let left = 0
// let right=arr.length-1
// while (left<right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
// }
// str = arr.join("")
// console.log(str);

// function Palindrome(str) {
//     let left = 0
//     let right=str.length-1
//     str = str.toLowerCase()
//     while (left<right) {
//         if (str[left]!==str[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }
// let str="abbbbba"
// console.log(Palindrome(str));



// function Frequecy(str1,str2) {
//     str1 = str1.toLowerCase()
//     let dec = {}
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] in dec) {
//             dec[str1[i]]+=1
//         } else {
//             dec[str1[i]]=1
//         }
//     }
// console.log(dec);
//     for (let j = 0; j < str2.length; j++) {
//         if (!dec[str2[j]]) {
//             return false
//         }
//         else {
//             dec[str2[j]]-=1
//         }
//     }
//     console.log(dec);

//     for (key in dec) {
//         if (dec[key] !== 0) {
//             return false
//         }
//     }
//     return true
// }

// let str1 = "listen"
// let str2="silent"
// console.log(Frequecy(str1,str2));


// function ReplaceallSpaces(str) {
//     str = str.replace(/ /g, "%20")
//     return str
// }
// let str="Abhi Shek Pawar"
// console.log(ReplaceallSpaces(str));




// function Longest(str) {
//     str = str.split(" ")
//     let max = 0
//     let word=""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > max) {
//             max = str[i].length
//             word=str[i]
//         }
//     }
//     return word
// }
// let str="Mylalal name is vish Pawarnj Rajesh"
// console.log(Longest(str));



// function FindallSubstring(str) {
//     for (let i = 0; i < str.length ; i++) {
//         let res=""
//         for (let j = i; j < str.length; j++) {
//             res += str[j]
//             if (res.length == 3) {
//                 console.log(res);
//             }
//         }

//     }
// }
// let str="Vishal"
// console.log(FindallSubstring(str));


// let str = "Vishal";
// let k = 3
// let res=[]
// for (let i = 0; i <= str.length-k; i++) {
//     res.push(str.slice(i,i+k))
// }
// console.log(res);



// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// Output: [3, 4, 5, 1, 2];



// let str = [1, 2, 3, 4, 5];
// let k = 3;
// k = k % str.length

// let part1 = str.slice(-k)
// let part2 = str.slice(0,str.length-k)

// console.log(part1.concat(part2));






// let str = "vishal"
// let k = 3
// let result=[]
// for (let i = 0; i <= str.length-k; i++) {
//     result.push(str.slice(i,i+k))
// }
// console.log(result);


// Input: [1, 2, 3, 4, 5], (k = 2);
// Output: [4, 5, 1, 2, 3];

// Input: [1, 2, 3, 4, 5], (k = 3);
// Output: [3, 4, 5, 1, 2];



// let str = [1, 2, 3, 4, 5]
// let k = 2;
// k = k % str.length

// let part1 = str.slice(-k)

// let part2 = str.slice(0, str.length-k)
// console.log(part1.concat(part2));

