function waterMelon(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += i % 2 ? '박' : '수';
  };
  return str;
}

console.log('n이 3인 경우: '+ waterMelon(3)); // n이 3인 경우: 수박수
console.log('n이 4인 경우: '+ waterMelon(4)); // n이 4인 경우: 수박수박