// Input: "hello"  
// Output: { h: 1, e: 1, l: 2, o: 1 }

// Input: "javascript"  
// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
let str = "javascript"; 
let dec = {}

for (let i = 0; i <= str.length - 1; i++){
    if (str[i] in dec) {
        dec[str[i]]+=1
    }
    else {
        dec[str[i]] = 1;
    }
}
console.log(dec)
