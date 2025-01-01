// input="abcde"
//output=[ 'abc', 'bcd', 'cde' ]

let str = "abcdegh";
n=str.length
let k = 3
let result=[]
for (let i = 0; i <= n-k; i++){
    result.push(str.slice(i,i+k))
}
console.log(result)

