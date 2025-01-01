// //Reverse the String
// let clog = console.log



// let result = ""

// for (let i = str.length - 1; i >= 0; i--){
//     result+=str[i]
// }
// clog(result)

// let arr = str.split("")
// let left = 0
// let right = str.length - 1;
// while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
// }
// str=arr.join("")
// clog(str)


// function Palindrome(str) {
//     str = str.toLowerCase();
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//           return false
//         }
//         left++;
//         right--;
//     }
//     return true
// }


// let str = "Madam";
// clog(Palindrome(str))

// let str = "Abhishek"

// str = str.toLowerCase()
// let count = 0
// let vowels="aeiou"
// for (let i = 0; i <= str.length - 1; i++){
//     if (vowels.includes(str[i])) {
//         count++
//     }
// }
// clog(count)

// let str= "Abhi shek abhi shek"
// // str = str.toLowerCase()
// // let dec = {}

// // for (let i = 0; i <= str.length - 1; i++){
// //     if (str[i] in dec) {
// //         dec[str[i]]+=1
// //     }
// //     else {
// //         dec[str[i]]=1
// //     }
// // }

// // clog(dec)

// // str = str.replace(/ /g, "%20")
// // clog(str)




// let dec = {}
// function Anagram(str1,str2) {
//     for (let i = 0; i <= str1.length - 1; i++) {
//       if (str1[i] in dec) {
//         dec[str1[i]] += 1;
//       } else {
//         dec[str1[i]] = 1;
//       }
//     }
//     for (let j = 0; j <= str2.length - 1; j++){
//         if (!dec[str2[j]]) {
//             return false
//         }
//         else {
//             dec[str2[j]]-=1
//         }
//     }
//     for (let key in dec) {
//         if (dec[key] != 0) {
//             return false
//         }
//     }
//     return true

// }

// let str1 = "listen";
// let str2 = "silent";

// clog(Anagram(str1,str2))

