// input = "Abhishek"
// output = "kehshihbA"

let str = "Hello World"
let arr = str.split("")
let left = 0
let right = str.length - 1

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
}
str = arr.join("")
console.log(str)