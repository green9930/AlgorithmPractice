function getCount8 () {
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < (i + '').length; j++) {
      if ((i + '')[j] === '8') count++;
    }
  }
  return count;
}

console.log(getCount8()); // 4000