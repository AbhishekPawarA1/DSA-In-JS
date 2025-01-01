// Input: "swiss";
// Output: "w";

// Input: "aabbcc";
// Output: null;


let clog = console.log

function firstchar() {
    let dec = {};
    for (let i = 0; i <= str.length - 1; i++) {
      if (str[i] in dec) {
        dec[str[i]] += 1;
      } else {
        dec[str[i]] = 1;
      }
    }

    for (key in dec) {
      if (dec[key] == 1) {
        return key;
      }
    }
    return null

}
let str = "swiss";

clog(firstchar(str))

