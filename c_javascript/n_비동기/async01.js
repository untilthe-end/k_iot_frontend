// async01.js

// # 비동기 프로그래밍
// : asynchronous (비동기적인 )
// - 특정 코드의 실행 완료를 기다리지 않고, 다음 코드를 실행하는 프로그램 방식

//? cf) 자바스크립트는 "왜?" 비동기를 쓸까?
// - 자바는 클래스(파일)단위로 실행
// - 자바스크립트는 코드 한줄 한줄 실행하는 스크립트 단위
// - JS는 단일 스레드를 사용하여 한 번에 한 줄만 실행!
// - But, 자바스크립트 내에서 네트워크 요청(HTTP), 파일 읽기, 타이머, 대용량 연산은 시간소요 많음
// >> 해당 동작에서 '동기 프로그래밍' 사용 시 해당 화면이 멈추고(프리징)
// >> 그래서 JS는 느린 작업은 밖에 맡겨두고(비동기), 나머지 코드를 계속 진행
// >> 느린 작업이 끝나면 "끝났다"라고 응답을 주고 그 결과를 이어서 처리하는 구조

//? 비동기 프로그래밍 활용 가능
// - 네트워크 요청(서버와의 통신)
// - 파일 I/O
// >> 시간이 오래 소요되는 작업

//! 비동기 프로그래밍 예시

// & 동기 프로그래밍
console.log("== 동기 구현 ==");

function work() {
  // 시간이 오래 소요되는 함수

  // cf) let today = new Date();
  //     today.now();
  const start = Date.now(); // 현재 날짜, 시간을 숫자로 반환

  // for (let i = 0; i < 9999999999; i++) {}

  const end = Date.now();

  console.log(end - start + "ms(초)");
}

work(); // work() 작업이 종료되지 않으면 다음 콘솔창 출력 x: 동기 프로그래밍
console.log("동기 작업 완료 후 실행될 코드 블록");

// & 비동기 프로그래밍
console.log("== 비동기 구현 ==");
function asyncWork() {
  // 시간이 오래 소요되는 작업
  // +) 콜백 함수
  //    >> 다른 함수의 '인자'로 전달되는 함수

  // cf) setTimeout(콜백함수, 지연시간ms);
  //     : 지연시간 뒤에 콜백함수 호출
  setTimeout(() => {
    const start = Date.now();
    // for (let i = 0; i < 9999999999; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0); // 지연시간 0: 최소 지연 시간(브러우저 마다 약 4ms 정도의 지연시간 있음) - 0.004초 지연
  // # setTimeout() 은 무조건 지연시킬거야. (비동기 함수)
  //   : 백그라운드에서 작업이 수행 - 기존의 코드 흐름을 방해하지 않음 x
}

console.log("비동기 작업 시작");
asyncWork();
console.log("비동기 작업 완료 후 실행"); // setTimeout의 비동기 성질로 asyncWork()보다 먼저 출력됨.

// 콜백 함수의 비동기 예제
function callbackWork(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 9999999999; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0);

  // & 어떠한 시간이 오래걸리는 setTimeout() 한다음에
  callback(); // 콜백함수 호출
}

function afterWork() {
  console.log('작업이 완료되었습니다.');
}

console.log('1. 작업을 시작합니다.');
callbackWork(afterWork);
console.log('2. 시간이 오래걸리는 작업을 기다리지 않습니다.');