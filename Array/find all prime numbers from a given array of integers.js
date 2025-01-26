//for example:
// [12, 17, 19, 22, 29, 35, 37, 40]

// Output:
// for example:
// [17, 19, 29, 37]

// A number is prime if it is greater than 1 and has no divisors other than 1 and itself.
// Algorithm Idea:
// For each number in the array, check if it is prime.
// To check if a number n is prime, test divisors from 2 to the square root of n.
// If no divisor is found, the number is prime.

let arr = [12, 17, 19, 22, 29, 35, 37, 40];
let res = []
for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 1; j <= arr[i]; j++) {
        if (arr[i] % j === 0) {
            count++
        }
    }   
    if (count == 2) {
        res.push(arr[i])
    }
}       
console.log(res);
