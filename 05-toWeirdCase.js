// 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  const strArr = s.toUpperCase().split('');
  const newArr = strArr.map((item, index) => index % 2 ? item.toLowerCase() : item);
  return newArr.join('');
}


console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'