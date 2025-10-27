//! 제네릭 제약 조건
//: 타입 매개변수가 특정 조건을 만족해야 함을 명시
// - 제네릭 타입의 사용 범위 제한!

function printLength<T>(arg: T): void {
//   console.log(arg.length); 
  // 오류: T 타입이 length 속성을 가진다는 보장이 없음
  // Property 'length' does not exist on type 'T'
}

//? 제약 조건 예시
interface ILength {
  length: number;
}

// T의 타입 변수가 반드시! ILength 인터페이스를 구현하는 타입이어야 함을 명시
// '타입변수' extends '반드시포함될타입'
// > 타입 검증이 타입 변수 지정 시에 결정
function constraints<T extends ILength>(arg: T): void {
  console.log(arg.length);
}

// constraints<boolean>(true); // 오류: boolean 타입은 length 속성을 가지지 않음
// Argument of type 'boolean' is not assignable to parameter of type 'ILength'

// constraints<number>(123); // 오류: number 타입은 length 속성을 가지지 않음
// Argument of type 'number' is not assignable to parameter of type 'ILength'

constraints<string>('Hello, TypeScript!'); // 정상 작동
// 문자열은 length 속성을 가짐

console.log(constraints({
  // # 필수 속성만 명시되어 있으면 가능
  // # length 속성을 반드시 포함 (구조적 타이핑, 덕 타이핑)
  length: 10,
  value: 3,
  addOption: 'hi'
}));

//? keyof 연산자
// : 객체 속성을 타입으로 간주

type Type = {
  name: string;
  age: number;
}

type Union = keyof Type;
// Union = "name" | "age";
// : 객체 형태의 타입에서 속성만 뽑아 유니온 타입으로 생성해주는 연산자

let keyofValue1: Union = "name"; // 리터럴 타입
let keyofValue2: Union = "age";  

//? 조건부 타입
// : 타입 매개변수에 대한 조건 표현식 사용
// - 조건 키워드 사용
type Check<T> = T extends string ? '문자열 타입' : '기타 타입';

type Type1 = Check<string>;
type Type2 = Check<number>;

let a: Type1 = '문자열 타입';
let b: Type2 = '기타 타입'; // 타입만 보고도 조건을 분기할수 있음.

function checkType<T>(value: T): Check<T> {
  let result = typeof value === 'string' ? ('String' as Check<T>) : ('Not a String' as Check<T>);
  return result;
}

console.log(checkType('문자열 전달'));  // String
console.log(checkType(600));        // Not a String

// # 구조적 타이핑 (Structural Typing)
/*
“구조(모양) 가 같으면 같은 타입으로 본다.”
즉, 이름이 아니라 내부 구조(프로퍼티나 메서드 형태) 로 타입을 판단하는 방식이에요.

TypeScript는 바로 이 구조적 타이핑 방식을 사용합니다.
*/

// # 덕 타이핑
/*
“만약 어떤 것이 오리처럼 걷고, 오리처럼 꽥꽥댄다면,
그것은 오리일 것이다.” 🦆

👉 즉, 실행 시점(runtime) 에 행동(메서드 존재 여부) 으로 타입을 판단하는 개념이에요.
*/