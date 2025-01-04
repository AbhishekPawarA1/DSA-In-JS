// palindrome
// countvowels
// frequecy
// anagram
// first non repeating
// reverse the words in String
// find all substring
// substring with length k

let clog = console.log


// function palindrome(str) {
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//       if (str[left] != str[right]) {
//         return false;
//         }
//         left++
//         right--
//     }
//     return true;
// }
// let str = "madamm";
// clog(palindrome(str))

// function Countvowels(str) {
//     str=str.toLowerCase()
//     let vowels = "aeiou"
//     let count=0
//     for (let i = 0; i <= str.length - 1; i++){
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }

// let str = "Abhishek"
// clog(Countvowels(str))



// palindrome
// countvowels
// frequecy
// anagram
// first non repeating
// reverse the words in String
// find all substring
// substring with length k


// function Frequecy(str) {
//     let dec = {}
//     clog(str.length)
//     for (let i = 0; i < str.length; i++){
//         if (str[i] in dec) {
//             dec[str[i]]+=1
//         }
//         else {
//             dec[str[i]]=1
//         }
//     }
//     clog(dec)
//     for (key in dec) {
//         if (dec[key] == 1) {
//             return key
//         }
//     }
// }

// let str = "madam"

// clog(Frequecy(str))

// function Anagram(str1,str2) {
//     let dec = {}
//     if (str1.length!==str2.length)return false
//     for (let i = 0; i <= str1.length-1; i++){
//         if(str1[i] in dec) {
//             dec[str1[i]] += 1;
//         }
//         else {
//             dec[str1[i]] = 1;
//         }
//     }
//     clog(dec)
//     for (let j = 0; j <= str2.length-1; j++){
//         if (!dec[str2[j]]) {
//             return false
//         }
//         else {
//             dec[str2[j]] -=1
//         }
//     }
//     clog(dec)
//     for (key in dec) {
//         if (dec[key] !== 0) {
//             return false
//         }
//     }
//     return true

// }

// let str1 = "listen"
// let str2 = "silent"
// clog(Anagram(str1,str2))



// let str = "My name is Abhishek"

// arr = str.split(" ")
// let left = 0
// let right = arr.length - 1

// while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
// }
// str=arr.join(" ")
// clog(str)


// palindrome
// countvowels
// frequecy
// anagram
// first non repeating
// reverse the words in String
// find all substring
// substring with length k



// function substring(str,n) {
//     for (let i = 0; i <= n; i++){
//         let res=[]
//         for (let j = i; j <= n; j++){
//             res.push(str[j])
//             if (res.length == 3) {
//                 clog(res)
//             }
//         }
//     }
// }

// let str = "vishal"
// let n = str.length - 1
// clog(substring(str,n))


// let str = "vishal"
// let k = 3
// n = str.length
// let result=[]
// for (let i = 0; i <= n - k; i++){
//     result.push(str.slice(i,i+k))
// }
// clog(result)


