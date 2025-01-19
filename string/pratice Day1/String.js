// 1 Reverse  a string
//str="Hello"  //olleH

// let str = "Hello World"
// let arr = str.split("")
// let left = 0
// let right=arr.length-1
// while (left<right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
// }
// str=arr.join("")
// console.log(str);



// 2 CHeck string is palindrome

// function Palindrome(str) {
//     str = str.toLowerCase()
//     let left = 0
//     let right = str.length - 1
//     while (left<right) {
//         if (str[left] !== str[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

// let str = "MadaM"
// console.log(Palindrome(str));

// madam  // true

// 3 Count vowels

//Hello world    //3

// let str = "Hello world"
// let vowels = "aeiou"
// let count=0
// str=str.toLowerCase()
// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++
//     }
// }
// console.log(count);


//4 find the frequency

// let str = "madam"

// let dec = {}

// for (let i = 0; i < str.length; i++) {
//     if (str[i] in dec) {
//         dec[str[i]]+=1
//     }
//     else {
//         dec[str[i]]=1
//     }
// }
// console.log(dec);

//5 Replace all spaces from string with %20


// let str = "Abhi shek Pawar"

// str = str.replaceAll(" ", "%20")
// console.log(str);

// 6 Check is two string are anagram

// function Anagram(str1, str2) {
//     let dec = {}
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] in dec) {
//             dec[str1[i]] += 1
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
// let str2 = "silent";

// console.log(Anagram(str1,str2));

// 7 find the longest word in string

// let str = "My name is ABhishek"
// str = str.split(" ")
// let max_num = 0
// let res=[]
// for (let i = 0; i < str.length; i++) {
//     if (str[i].length > max_num) {
//         max_num = str[i].length
//         res=str[i]
//     }
// }
// console.log(res);

// 8 find the first unique char in string


// let str = "swiss"

// let dec = {}
// let res=""
// for (let i = 0; i < str.length; i++) {
//     if (str[i] in dec) {
//         dec[str[i]]+=1
//     }
//     else {
//         dec[str[i]]=1
//     }
// }
// for (key in dec) {
//     if (dec[key] == 1) {
//         res = key
//         break
//     }
// }
// console.log(res);


// 9 reverse the words in string
// Input: "The quick brown fox";
// Output: "fox brown quick The";


// let str = "The quick brown fox";
// let arr = str.split(" ")
// let left = 0
// let right=arr.length-1
// while (left<right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
// }
// str=arr.join(" ")
// console.log(str);

// 10 find all substring

// let str = "abcde"
// for (let i = 0; i < str.length; i++) {
//     let res=[]
//     for (let  j= i;  j< str.length; j++) {
//         res.push(str[j])
//         console.log(res);
//     }
// }


// 11 substring of the length k


// let str = "abcde"
// let k=3
// let res=[]
// for (let i = 0; i <= str.length - k; i++) {
//     res.push(str.slice(i,i+k))
    
// }
// console.log(res);


