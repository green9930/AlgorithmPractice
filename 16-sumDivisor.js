function sumDivisor(num) {
  let sum = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) sum.push(i);
  }
  return sum.reduce((acc, cur) => acc + cur, 0);  
}

console.log(sumDivisor(12)); // 28 