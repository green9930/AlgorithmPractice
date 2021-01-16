function adder(x, y){
  const res = [];
  for (let i = x; i <= y; i++) {
    res.push(i);
  }
  return res.reduce((acc, cur) => acc + cur, 0);
}

console.log(adder(3, 5)); // 12