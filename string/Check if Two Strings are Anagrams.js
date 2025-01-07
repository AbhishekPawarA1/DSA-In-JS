// Input: "listen", "silent";
// Output: true;

// Input: "hello", "world";
// Output: false;

// function anagram(str1, str2) {
    
//     if (str1.length != str2.length) return false
//     let dec = {}
//     for (let i = 0; i <= str1.length - 1; i++){
//         if (str1[i] in dec) {
//             dec[str1[i]]+=1
//         }
//         else {
//             dec[str1[i]] = 1;
//         }
//     }
//     for (let j = 0; j <= str2.length-1; j++){
//         if (!dec[str2[j]]) {
//             return false
//         }
//         else {
//             dec[str2[j]]-=1
//         }
//     }
//     for (let key in dec) {
//         if (dec[key] !== 0) {
//             return false
//         }
//     }
//     return true
// }




function SortedAnagram(str1, str2) {
    if (str1.split("").sort().join("") == str2.split("").sort().join("")) {
        return true
    }
    return false
}
let str1 = "listen";
let str2 = "silent";
console.log(SortedAnagram(str1,str2));
// console.log(anagram(str1,str2))


