// # Callback 함수(고차 함수)
// * 고차함수는 "함수를 다루는 함수" | 함수를 전달받거나 반환하는 함수
// & 자바는 Java 8+ 이후 람다식에서 사용가능함.

// === 콜백 함수를 활용하는 JS의 '내장 함수' === //

// ! 타이머 함수 (비동기 콜백)
// : 특정 시간 이후에 함수를 실행 OR 일정 간격으로 함수를 반복 실행 가능

// ? cf) 비동기
// : 작업이 끝날 때까지 기다리지 않고 다음 코드를 바로 실행하는 방식
// > "콜백 함수"는 다른 함수의 인자로 전달되어, 특정 시점에 실행되는 함수
// > "비동기 콜백 함수"는 비동기 작업이 완료된 후 실행되는 콜백 함수
//      : 나중에 실행될 일을 미리 등록해두는 것!

// & ex) 네이버 메인화면 | 배너가 순서상 먼저인데 image라서 동시에 출력되지 않고 늦게 나온다.

// 1) setTimeout(콜백함수, 시간);
// - 콜백 함수: 지정된 시간 이후에 '단 한 번만' 실행될 함수
// - 시간: ms 밀리초 단위 (1s === 1000ms)

function runlater(name = 'Lee') {
  console.log(`Hello, ${name}^^`);
}

runlater(); // Hello, Lee^^ - 동기 프로그래밍

setTimeout(runlater, 3000); // Hello, Lee^^
// # 호출부 없음 () 괄호

// setTimeout(runlater('도경'), 3000); 
// TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
// >> 콜백 함수의 인자는 undefined(비워져 있음)여야만 한다!

// * cf) 콜백 함수의 인자 전달 방법
// : 세 번재 인자부터 나열되는 값이 함수의 매개변수로 전달
setTimeout(runlater, 3000, '이도경');

// cf) 함수 호출: 함수명(전달할 인자 나열);
// >> 호출부 () 작성 시 코드를 읽는 즉시 함수 실행!
// # 그러므로 아래는 오류나서 주석 처리함 ! 즉시 호출하라면서 지연시간을 줘서
// setTimeout(runlater(), 2000, '조승범');

function manyParam(name, age, job) {
  console.log(`${name} is ${age} years old and his job is ${job}`);
}

setTimeout(manyParam, 100, 'Joon', 20, 'Trader');

setTimeout(() => console.log('3초 뒤 실행'), 3000);
// cf) 화살표 함수에서 소괄호 생략은 매개 변수가 1개일 때만 가능
//      >> 매개변수가 없는 경우에는 반드시 소괄호 작성!

//! 타이머 취소 함수: clearTimeout(타이머 ID);
// : 등록된 타이머를 취소할 때 사용
// - setTimeout으로 예약된 코드 실행을 중단하거나 무효화할 때 사용

// cf) 타이머 ID는 타이머 함수 호출 시 반환
const timeId = setTimeout(() => console.log('타이머 ID 확인용'), 5000);
console.log(timeId);

clearTimeout(timeId);

//! setInterval(콜백 함수, 시간)
// : '지정된 시간 간격 마다' 함수를 반복해서 실행
// >> 사용법은 setTimeout과 유사

let count = 1;

let id = setInterval(() => {
  console.log(`3초마다 실행 됩니다. ${count}번째`);
  count++;
}, 3000); // 3초마다 실행

setTimeout(() => {
  console.log('타이머를 종료합니다.');
  clearInterval(id);
}, 15000);