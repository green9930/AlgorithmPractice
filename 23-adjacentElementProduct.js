function adjacentElementsProduct(arr) {
  const adjacentArr = arr.map((_, i, array) => array[i] * array[i + 1]).filter(val => !Number.isNaN(val));
  console.log(adjacentArr);
  return Math.max(...adjacentArr);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21