// Find the Longest Substring Without Repeating Characters

// Example:
// Input: "abcabcbb"
// Output: 3
// Explanation: "abc".

// Input: "bbbbb"
// Output: 1
// Explanation:"b".

// Input: "pwwkew"
// Output: 3
// Explanation: "wke".




let str = "pwwkew";

let char_set = new Set()
let left = 0
let longest_sub = ""

for (let right = 0; right < str.length; right++) {
    while (char_set.has(str[right])) {
        char_set.delete(str[left])
        left++
    }
    char_set.add(str[right])

    if (right - left + 1 > longest_sub.length) {
        longest_sub=str.slice(left,right+1)
    }
}

console.log(longest_sub);





























// let str = "pwwkew" ; 
// let char_set = new Set()
// let left = 0
// let longest_sub = ""
// for (let right = 0; right < str.length; right++) {
//     while (char_set.has(str[right])) {
//         char_set.delete(str[left])
//         left+=1
//     }
//     char_set.add(str[right])

//     if (right - left + 1 > longest_sub.length) {
//         longest_sub=str.slice(left,right+1)
//     }
// }
// console.log(longest_sub);






