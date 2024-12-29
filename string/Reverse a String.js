// Input: "hello";
// Output: "olleh";


// approach 1
let str = "hello"
let newstr = ""

for (let i = str.length - 1; i >= 0; i--){
    newstr+=str[i]
}
console.log(newstr)



// approach 2
let arr = str.split("")
let left = 0
let right = str.length - 1

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
}

str = arr.join("");
console.log(str)
