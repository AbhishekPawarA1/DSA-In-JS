// Input: [1, 3, 4, 2, 2, 3];
// Output: [2, 3];


let arr = [1, 3, 4, 2, 2, 3];
let res = []
let dec = {}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] in dec) {
        dec[arr[i]]+=1
    }
    else {
        dec[arr[i]]=1
    }
}
for (key in dec) {
    if (dec[key] > 1) {
        res.push(Number(key))
    }
}
console.log(res);