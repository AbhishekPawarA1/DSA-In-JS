// Input: "abcdef";
// Output: true;

// Input: "hello";
// Output: false;





function uniquechar() {
    let dec = {};
    for (let i = 0; i <= str.length - 1; i++) {
      if (str[i] in dec) {
        dec[str[i]] += 1;
      } else {
        dec[str[i]] = 1;
      }
    }
    for (key in dec) {
      if (dec[key] > 1) {
        return false;
      }
    }
    return true;
}

let str = "abcdefghijklmnopqrstuvwxyz";
console.log(uniquechar(str));


