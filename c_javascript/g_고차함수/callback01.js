// # Callback 함수(고차 함수)
// * 고차함수는 "함수를 다루는 함수" | 함수를 전달받거나 반환하는 함수
// & 자바는 Java 8+ 이후 람다식에서 사용가능함.
// ? forEach(), map(), filter()

// # 공통점!! 배열을 처음부터 끝까지 순회한다
// forEach()  - 반환할 배열이 없음 => 출력 할때 보통 사용
// map()      - 문자를 대문자로 변환하거나 , 값을 계산해서 반환할 때 사용
// filter()   - 어떤 조건식에 true 인것만 뽑아서 반환!!

// cf) JS의 함수
function funcName1() {} // 1) 함수 선언식 - function 필수 / 함수명 필수
const funcName2 = function () {}; // 2) 함수 표현식 - function 필수 / 함수명 선택
const funcName3 = () => {}; // 3) 화살표 함수 - function 생략 / 함수명 생략

//! 1. 콜백 함수
// : 다른 함수의 "인자"로 전달, 그 함수의 내부에서 실행되는 함수
// - "인자" - 실제 데이터 값

// cf) 자바스크립트의 자료형
// - 기본 자료형(실제 데이터 값) VS 참조 자료형(데이터의 주소값)
// - JS에서 함수는 '자료형'
//    >> 변수에 할당 가능 & 함수의 매개변수로 전달 가능(인자)

//# const funcName2 = function () {} // 함수를 변수에 담는다.

// typeof 연산자: 데이터의 타입을 문자열로 반환
function funcType() {}
console.log(typeof funcType); // function

//! 2. 콜백 함수의 필요성 (응용)
// - 비동기 처리               : 순차적인 코드 흐름을 개발자가 원하는 방식으로 제어
// - 이벤트 리스너 처리         : 사용자 행동에 반응하는 이벤트 내부에서 동작 가능
// - 서버 요청 처리, 타이머 함수 : 프로그램의 실행 흐름을 제어

//! 3. 콜백 함수 예시
//? 1) 선언적 함수를 사용한 콜백 함수
console.log("=== 콜백 (선언적 함수) ===");

// 콜백 함수 (다른 함수의 인자로 전달될 값)
function print1(index) {
  console.log(`${index}번째 함수 호출`);
}

// 일반 코드 흐름 로직
function callback1(callbackFunc) {
  // print 함수가 인자로 전달되면 callbackFunc 매개변수 명으로 사용됨
  for (let i = 0; i < 3; i++) {
    callbackFunc(i + 1); // i의 값은 print 함수의 index 매개변수로 전달
  }
}

callback1(print1);

//? 2) 익명 함수를 사용한 콜백 함수
console.log("=== 콜백 (익명 함수) ===");

const print2 = function (index) {
  console.log(`${index}번째 함수 호출~~`);
};

callback1(print2);

//? 3) 화살표 함수를 사용한 콜백 함수
console.log("=== 콜백 (화살표 함수) ===");

const evenFunc = (evenNum) => console.log(`${evenNum} 값은 짝수입니다.`);
const oddFunc = (oddNum) => console.log(`${oddNum} 값은 홀수입니다.`);

// function evenFunc(evenNum) {
//   console.log(`${evenNum} 값은 짝수입니다.`);
// }

function callback2(number, callbackFunc1, callbackFunc2) {
  // number 값이 짝수면 callbackFunc1 호출
  //          , 홀수면 callbackFunc2 호출

  if (number % 2 === 0) {
    callbackFunc1(number);
  } else {
    callbackFunc2(number);
  }
}

callback2(3, evenFunc, oddFunc); // 3 값은 홀수입니다.
callback2(4, evenFunc, oddFunc); // 4 값은 짝수입니다.
