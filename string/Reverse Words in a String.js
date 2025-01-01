// Input: "The quick brown fox";
// Output: "fox brown quick The";

// Input: "hello world";
// Output: "world hello";

let str = "The quick brown fox";
let clog = console.log
let arr= str.split(" ")
let left = 0
let right = arr.length - 1;

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
}
str=arr.join(" ")
clog(str)

