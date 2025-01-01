// let str = "Hello"
let cl = console.log

// // expected output="olleH"

// // let result = ""

// // for (i = str.length-1; i >= 0; i--){
// //     result+=str[i]
// // }
// // cl(result)

// let arr = str.split("")
// let left = 0
// let right = str.length - 1

// while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
// }

// str = arr.join("")
// cl(str)


// palindrome


// function validpalindrome(str) {
//     str = str.toLowerCase();
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] != str[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

// let str = "Madam";
// cl(validpalindrome(str))


// count vowels


// let str = "aeiOU"
// let vowels="aeiou"
// str = str.toLowerCase()
// let count=0
// for (let i = 0; i <= str.length - 1; i++){
//     if (vowels.includes(str[i])) {
//         count++
//     }
// }
// cl(count)


//fincd frequency

// function findfreq(str) {
//     str=str.toLowerCase()
//     let dec = {};
//     for (let i = 0; i <= str.length - 1; i++){
//         if (str[i] in dec) {
//             dec[str[i]]+=1
//         }
//         else {
//             dec[str[i]]=1
//         }
//     }
//  return dec
// }
// let str = "Abhisheka";
// cl(findfreq(str))



// Remove all spaces in a string with = %20


// let str = "Abhi Shek"
// str = str.replace(/ /g, "%20")
// cl(str)


// check Anagram




// function anagram(str1,str2) {
//     let dec = {}
//     if (str1.length!==str2.length)return false
//     for (let i = 0; i <= str1.length - 1; i++){
//         if (str1[i] in dec) {
//             dec[str1[i]]+=1
//         }
//         else {
//             dec[str1[i]]=1
//         }
//     }
//     cl(dec)
//     for (let j = 0; j <= str2.length - 1; j++){
//         if (!dec[str2[j]]) {
//             return false
//         }
//         else {
//             dec[str2[j]]-=1
//         }
//     }
//     cl(dec);

//     for (key in dec) {
//         if (dec[key] !== 0) {
//             return false
//         }
//     }
//     return true
// }

// let str1= "Madam"
// let str2 = "damam"
// str1 = str1.toLowerCase();
// str2 = str2.toLowerCase();
// cl(anagram(str1,str2))


