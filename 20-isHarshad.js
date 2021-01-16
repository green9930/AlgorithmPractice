function isHarshad(n){
  const arrSum = (n + '').split('').reduce((cur, acc) => cur + (+acc), 0);
  return n % arrSum ? false : true;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
