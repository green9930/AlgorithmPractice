function isNotOverlapArray(array) {
  const newArr = [...array].sort((a, b) => a - b);
  return newArr.every((item, index) => item === index + 1);
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false
console.log(isNotOverlapArray([-1, 2, 3]));   // false