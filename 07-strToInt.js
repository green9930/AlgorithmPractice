function strToInt(str) {
  return +str;
}

console.log(strToInt('1234'));  // 1234
console.log(typeof strToInt('1234'));  // number

console.log(strToInt('-1234')); // -1234
console.log(typeof strToInt('-1234'));  // number
