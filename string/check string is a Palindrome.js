// Input: "madam";
// Output: true;

// Input: "hello";
// Output: false;


function valid(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] != str[right]) {
        return false
      }
      left++;
      right--;
    }
    return true
}
let str = "madam";
console.log(valid(str))
