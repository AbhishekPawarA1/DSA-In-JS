// Input: "abc";
// Output: ["a", "ab", "abc", "b", "bc", "c"];



// approach 1

let str = "abc"
let n = str.length - 1

for (let i = 0; i <= n; i++){
    let res = "";
    for (let j = i; j <= n; j++){
        res += str[j]
        console.log(res)    
    }
}





