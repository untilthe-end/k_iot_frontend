/*
  == javascript 자바스크립트 복습

  파일 확장자: .js

  == JS 특징
  - 약 타입 언어: 변수 선언 시 타입 필요 없음!
    > 변수 선언 (변수종류 변수명 / let age)

    cf) 자바 변수 선언 (데이터타입 변수명 / int age)

  - 변수 종류
    > 변수: let - 재선언 불가 / 재할당 가능
          , var - 재선언 가능 / 재할당 가능
    > 상수: const
    ? 상수: 재할당/재선언 불가

    cf) 자바 상수 표현 (final)

  - 함수형 프로그래밍 가능 (함수라는 문법이 존재)

    cf) 자바는 독립적인 함수 사용 불가 - 클래스 내의 메서드만 존재!
*/

// # JS의 배열 
// : 여러 개의 데이터를 순차적으로 나열한 자료 구조
// - 다양한 타입을 하나의 배열에 저장 가능 - 자바와의 차이점
// - 배열의 크기가 고정적이지 않다. (동적) - 자바와의 차이점

// +) 인덱스 번호: 0부터 시작
// +) 각 데이터: 요소

//! 1. 배열 생성 방식
// 1) 리터럴('문자 그대로의', literal) 방식

// 변수종류 변수명 = ['요소1', '요소2', '요소3', ...]
let fruits = ['사과', '오렌지', '망고']; // 대괄호 안에 원하는 요소를 , 로 구분하여 나열
let numbers = [1,2,3,4,5];
let empty = [];
let variableValues = [1, '문자', true, undefined, null, [1,2,3]];

// 2) Array 생성자 사용 방식
// : 새로운 배열 생성 시 배열 크기, 초기값 지정 가능

// 변수종류 변수명 = new Array(크기값);
// 변수종류 변수명 = new Array(초기값 나열);
let arrayFruits1 = new Array(3);
let arrayFruits2 = new Array('사과', '오렌지', '배');

//! 2. 배열의 활용
//? 1) 요소 접근 & 수정
const sports = ['축구', '야구', '농구'];
// sports = ['배구'];

// clg: console.log(); - snippet 기능
console.log(sports[1]); // 배열명[인덱스번호]

sports[2] = 'basketball';
console.log(sports); // [ '축구', '야구', 'basketball' ]

//    # 오늘부터 배울 내용 2025-10-13 (월)
//    # 위에서 const 배열 선언했는데 sports[2]에 재할당했는데 오류없는거는, 첫번째 요소의 주소값을 저장했기때문에
// cf) 참조 자료형: 배열, 함수, 객체 등
//    >> 실제 데이터 x, 메모리 주소를 저장하여 '참조'

const basketball = '농구';
// basketball = 'basketball'; //TypeError: Assignment to constant variable.

// ? 요소 길이
console.log(sports.length); // 3

// cf) JS 배열은 동적 배열: 임의로 배열의 크기 수정 가능
//    >> 비워지는 요소는 undefinded 값 (새로운 공간의 타입)

sports.length = 6;
console.log(sports.length); // 6

// 이어지는 undefinded를 <3 empty items> 방법으로 표기
console.log(sports);      // [ '축구', '야구', 'basketball', <3 empty items> ]

sports[5] = '배구';
sports[4] = '탁구';
console.log(sports); // [ '축구', '야구', 'basketball', <1 empty item>, '탁구', '배구' ]
console.log(sports[3]); // undefined - 할당 안해주면 undefined 라고 나옴