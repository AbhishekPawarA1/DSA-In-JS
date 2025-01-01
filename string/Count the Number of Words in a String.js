// Input: "The quick brown fox";
// Output: 4;

// Input: "Hello, world!";
// Output: 2;

let clog=console.log
let str = "Hello, world!";

str = str.split(" ")
let count=0
for (let i = 0; i <= str.length - 1; i++){
    count++
}
clog(count)