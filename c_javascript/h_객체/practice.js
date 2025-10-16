// practice.js

//! 배열
// 변수종류(const/let) 변수명 = [값1, 값2, ...];

//! 함수
// 1) 함수 선언식: function 함수명(매개변수 나열) { ... }
// 2) 함수 표현식: 변수종류 변수명 = function () { ... }
// 3) 화살표 함수: 변수종류 변수명 = () => { ... }

//! 객체
//? 키와 값의 쌍으로 나열 (속성과 기능 사이는 콤마로 분리)
/* 
변수종류 변수명 = {
  키: 값,               // 속성
  키: {
    키: 값,
    키: 값
  }
  키: function() {      // 기능, 행위
    ...
  },
  키: function() {
  }
} 

변수명(객체명).속성명;
변수명(객체명).기능명();
*/

//! 배열, 함수, 객체 복습 문제

// practice.js

//! 객체, 배열, 함수 복습 문제

//# 문제 1

//& 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가

let person = {
  name: "haha",
  age: 30,
  isStudent: false,
};

// 객체의 속성값 접근
// 1) 객체명.속성명;
// 2) 객체명[속성명];
console.log(person.name);
console.log(person["name"]);

//& 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력

let fruits = ["banana"];

fruits.push("apple", "pear");
console.log(fruits);
console.log(fruits[1]);

//& 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
// >> 매개변수 O, 반환값 O

function add(a, b) {
  // 함수 선언식
  return a + b;
}

let add1 = function (a, b) {
  // 함수 표현식
  return a + b;
};

let add2 = (a, b) => a + b; // 화살표 표현식

console.log(add(3, 5));

//# 문제 2
console.log("=== 문제 2 ===");

//& 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

//* for in 반복문
// : 객체와 배열의 순회를 가볍게 처리하는 반복문 (for문의 객체, 배열 순회 - 인덱스 사용 x)

let array = [1, 2, 3, 4, 5];

// array 배열 안을(in) 순회하면서 각 요소의 인덱스를 할당
// : 배열의 요소에 접근하기 위해서 [] 대괄호 연산자를 사용
//* 그냥 console.log(num) 하면 인덱스 번호 출력 0,1,2,3,4
//?     console.log(array[num]) 하면 실제 값 출력
for (let num in array) {
  console.log(array[num]);
}

for (let key in person) {
  console.log(person[key]);
}

//& 2. 배열 메서드(배열 내장 함수) 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
//* 내가 푼거 [Function: toUpperCase] 이렇게 나옴 -> Case뒤에 () 를 안붙였었네
let fruitsToUpperCase = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsToUpperCase);

//* 정답
let upperCaseFruits = fruits.map(function (value, index, array) {
  return value.toUpperCase();
});

console.log(upperCaseFruits); //[ 'BANANA', 'APPLE', 'PEAR' ]

// cf) 배열메서드의 콜백함수는 주로 화살표 함수 형태
console.log(fruits.map((value) => value.toUpperCase()));
//[ 'BANANA', 'APPLE', 'PEAR' ]

//& 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2) {
  //? .map(요소, 인덱스번호)
  let result = arr1.map((element, index) => {
    return element + arr2[index]; //동일한 인덱스 번호를 가진 요소끼리 더해져서 반환
  });

  return result;
}
console.log(combineArrays(arr1, arr2));
// 실제 데이터가 담긴 배열 변수 [ 5, 7, 9 ]

//# 문제 3

//& 1. 객체 깊은 복사
// : person 객체를 '깊은 복사'하는 함수를 작성

// +) 객체의 깊은 복사 JSON 자료형을 사용
// >> JSON.stringify(객체데이터)
// >> JSON.parse(JSON데이터)

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepCopy(person);
personCopy.name = '이도경';
console.log(personCopy);

console.log(person);

//& 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링(filter)하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환(map)하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 },
];

function adultUserNames(users){
  return users
  .filter(user => user.age >= 20)
  .map(user => user.name)
}

console.log(adultUserNames(users));