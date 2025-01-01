// Input: "The quick brown fox jumped over the lazy dog";
// Output: "jumped";

// Input: "JavaScript is awesome";
// Output: "JavaScript";

let clog=console.log
let str = "The quick brown fox jumped over the lazy dog";
str = str.split(" ")
let arr=""
for (let i = 0; i <= str.length - 1; i++){
    if (str[i].length > arr.length) {
        arr=str[i]
    }
}
clog(arr)
