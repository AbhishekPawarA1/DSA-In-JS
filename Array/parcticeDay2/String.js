// string

// valid Anagram                            done
// palindrome
// count number of words in String

// find the first non repiting Character

// find the longest word in String

// substring of length k

// replace all spaces into % 20

// count vowels

// reverse the String


//7

// let str = "AEiOu"
// str=str.toLowerCase()
// let vowels = "aeiou"
// let count=0
// for (let  i= 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++
//     }
// }
// console.log(count);



//6

// let str = "Hello World"
// let arr = str.split("")
// let left = 0
// let right = str.length - 1

// while (left<right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++
//     right--
// }

// str=arr.join("")
// console.log(str);

//5


// let str = "Abhi shek An an d Paw ar"
// str = str.replace(/ /g, "%20")
// console.log(str);

//4
// input="abcde"
//output=[ 'abc', 'bcd', 'cde' ]

// let str = "abcde";
// let k=3
// let res=[]
// for (let i = 0; i <= str.length-k; i++) {
//     res.push(str.slice(i,i+k))
// }
// console.log(res);




//3

// let str = "My name is Abhishek What is your name"

// str = str.split(" ")
// let max = 0
// let res=[]
// for (let i = 0; i < str.length; i++) {
//     if (str[i].length > max) {
//         max = str[i].length
//         res=str[i]
//     }
// }

// console.log(max, res);






//2

// function Palindrome(str) {
//     str = str.toLowerCase()
//     let left = 0
//     let right = str.length - 1;
//     while (left<right) {
//         if (str[left] !== str[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true

    
    
// }
// let str = "Madam";
// console.log(Palindrome(str));




// 1

// function Anagram(str1, str2) {
//     let dec={}
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] in dec) {
//             dec[str1[i]] += 1
//         }
//         else {
//             dec[str1[i]] = 1;
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
// console.log(Anagram(str1,str2));