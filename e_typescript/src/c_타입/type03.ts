//! 타입 별칭 (type alias) 
// : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
// - 코드의 재사용성과 가독성 향상

//? 기본 사용 방법
// : type 키워드 사용
// - type 타입별칭 = 타입;
// +) 타입별칭 지정 시 일반 변수와의 차이를 위해 "UpperCamelCase" 사용 권장

//# 1. 변수 타입 별칭: 사용 x
type TextType = string;
let textMsg1: TextType = '텍스트 문자열 입니다.';
let textMsg2: string = '텍스트 문자열 입니다.'

type NumberType = number;
let num1: NumberType = 123;
let num2: number = 234;

// cf) 원시 타입 키워드 그대로를 사용하는 것이 코드 해석 & 가독성에 도움

//# 2. 객체 타입 별칭
type UserType = {
  name: string;
  height: number;
}

const user1: UserType = {
  name: '이승아',
  height: 170
}

const user2: UserType = {
  name: '',
  height: 157
}

//# 3. 함수 타입 별칭
// : UserType 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
// - type 타입별칭 = (매개변수: 타입 지정) => 반환타입;
type ValidUser = (user: UserType) => boolean;

// cf) 함수 타입 별칭 사용 시 함수 표현식 or 화살표 함수 사용 권장
const isValidUser: ValidUser = (user) => user.name !== '';

console.log(isValidUser(user1)); // true
console.log(isValidUser(user2)); // false

type FuncType = (num: number) => number;

const exampleFunc: FuncType = (num) => {
  num *= 2;
  return num;
}

exampleFunc(3); // 6

type ArrayReturnType = (num: number) => number[];

const arrayReturnFunc: ArrayReturnType = (num) => {
  return [num, num];
}

arrayReturnFunc(4); // [4, 4]

// === 타입 별칭 사용 ===
let age: number;
let isStudent: boolean;

age = 1;
isStudent = true;
console.log(age, isStudent);
console.log(`${age}, isStudent: ${isStudent}`);

type ProductType = {
  id: string;
  name: string;
  price: number;
}

let product: ProductType = {
  id: '1',
  name: '삼성 노트북',
  price: 2000
}

