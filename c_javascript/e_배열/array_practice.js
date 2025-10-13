// array_practice.js

//! 1. 배열 합계 구하기
let array = [1, 2, 3, 4, 5];

// 매개변수에 타입이 없음. 약타입 언어
function sumArray(array) {
  let sum = 0; 

  let length = array.length; // 성능 향상에 좋음
  for (let i = 0; i < length; i++) {
    // 요소 전체를 순회
    sum += array[i];
  }

  return sum;
}

console.log(sumArray(array)); // 15
console.log(sumArray([100, 10, 5])); // 115