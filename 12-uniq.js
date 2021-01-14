function uniq(array) {
  const set = new Set(array);
  return [...set];
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]