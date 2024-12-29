// Input: "hello world";
// Output: "hello%20world";

// Input: "a b c";
// Output: "a%20b%20c";


let str = "a b c";
str=str.replace(/ /g, "%20")
console.log(str)

stre = str.replaceAll(" ", "%20")
console.log(stre)
