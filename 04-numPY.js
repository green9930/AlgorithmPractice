function numPY(s) {
  if (!s) return true;
  const numS = s.toUpperCase();
  const numP = [...numS].filter(item => item === 'P'); 
  const numY = [...numS].filter(item => item === 'Y'); 

  return numP.length === numY.length ? true : false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true