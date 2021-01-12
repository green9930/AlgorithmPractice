function hideNumbers(str) {
  const strArr = [...str];
  for (let i = 0; i < strArr.length - 4; i++) {
    strArr[i] = '*';
  }
  return strArr.join('');
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888