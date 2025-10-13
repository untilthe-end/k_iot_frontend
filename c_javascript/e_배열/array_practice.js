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

//! 2. 특정 수 이상의 요소 필터링

// 전달되는 배열 안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환 
// # stream API의 filter 같음
function filterTen(array) {
  let filteredValue = []; // 10 이상의 값을 담는 배열 

  let length = array.length;

  for (let i = 0; i < length; i++){
    if (array[i] > 10) {
      filteredValue.push(array[i]);
    }
  }

  return filteredValue;
}

console.log(filterTen([3, 15, 23, 5, 11, 19, 10 , 55, 60])); // [ 15, 23, 11, 19, 55, 60 ]
console.log(filterTen([3, 1, 2, 5, 1, 9, 1 , 5, 6])); // []

//! 3. 배열의 평균 구하기
// - findAverage(array)
// : 평균 == 전체 요소의 합 / 요소의 개수

function findAverage(array) {
  let sum = 0;

  let length = array.length;

  for (let i = 0; i < length; i ++) {
    sum += array[i];
  }
  let averge = sum / length;

  return averge;
}

console.log(findAverage([10, 20, 30]));

//! 4. 배열 내의 최대값 찾기
// - findMax(array)
// : 배열의 첫 번째 요소를 max라는 변수에 담기
// : 배열을 순회하면서 max보다 큰 값이 있을 경우 max를 해당 값으로 재할당
function findMax(array) {
  let max = array[0];
  let length = array.length;

  for (let i = 1; i < length; i++) {
    // 첫 번재 요소는 이미 max 변수에 할당
    // > 두 번째 요소부터 순회
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMax([3,100,10]));