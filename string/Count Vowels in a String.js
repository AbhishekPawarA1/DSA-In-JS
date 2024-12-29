// Input: "hello world";
// Output: 3;

// Input: "JavaScript";
// Output: 3;

let str = "Hello world";
let vowels= "aeiou"
str = str.toLowerCase()
var count=0
for (let i = 0; i <= str.length-1; i++){
    if (vowels.includes(str[i])) {
        count++
    }
}
console.log(count)