// c_helloWorld.ts
console.log('Hello TypeScript!');
var num = 3;
//num = '안녕하세요'; Type 'string' is not assignable to type 'number'
console.log(num);
//! cf) ts 코드는 실시간으로 js 컴파일 반영 x
//    +) TS 파일은 node 파일명.ts로 실행되지 x
//      tsc 파일명.ts 로 실행하면 .js파일 생성되고 거기서 node 파일명.js로 싱행해야함.
//! >> ts-node를 사용한 실시간 번역 및 실행
// : js 파일 생성 되지 않음
// : npm install ts-node --save-dev (프로젝트 최상단)
//? 설치 후 반드시 package.json 파일 확인
