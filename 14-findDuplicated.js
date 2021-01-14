// 2번 반복되는 요소만 찾을 수 있음 (3번 반복되면 배열 안에 중복되어 반환됨)
// function findDuplicated(array) {
//   const newArr = array.filter((item, index, arr) => arr.indexOf(item) !== index);
//   return [...newArr];
// }

// console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
// console.log(findDuplicated([1, 3, 4, 5, 5, 8, 1, 3, 9, 0, 1, 33, 5, 6, 7, 9, 0])); // [ 5, 1, 3, 1, 5, 9, 0 ]


function findDuplicated(array) {
  const newArr = new Set(array.filter((item, index, arr) => arr.indexOf(item) !== index));
  return [...newArr]
}
console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
console.log(findDuplicated([1, 3, 4, 5, 5, 8, 1, 3, 9, 0, 1, 33, 5, 6, 7, 9, 0])); // [ 5, 1, 3, 9, 0 ]