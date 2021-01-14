function checkPalindrom(str) {
  strOrig = [...str];
  strRev = [...str].reverse();
  for (let i = 0; i < str.length; i++) {
    return strOrig[i] === strRev[i] ? true : false;
  }
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true