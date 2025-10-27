//! 제네릭(Generic, 일반적인) 
// : "한 번 만든 코드로 여러 타입을 다루는 기술"
// > 재사용 가능한 컴포넌트(코드 단위)를 만드는 데 사용
// > 데이터 타입을 미리 지정하지 x, 사용 시점에 데이터 타입을 지정 o

//? 제네릭의 필요성
// : 코드 중복 줄임, 타입 안정성('컴파일' 시점에 타입 체크)

//? 제네릭 기본 문법
// : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름 뒤에 <>작성
// - 꺽쇠괄호 안에 타입 변수 지정

// cf) 타입 변수: 임의의 키워드 사용 (주로 T, U, V 등 대문자 한 글자로 표현)

function generic<T>(data: T): T {
  return data;
}

generic<string>('안녕');
console.log(generic<string>('안녕'));
generic<number>(123);

console.log(generic<string>('hello'));  // hello 
console.log(generic<number>(345));      // 345

// +) 하나의 컴포넌트에 여러 개의 타입 변수 지정 가능
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let pair1 = pair<string, number>('안녕', 123)
let pair2 = pair<number, string>(123, '안녕');

console.log(pair1, pair2);  // [ '안녕', 123 ] [ 123, '안녕' ]

// +) 제네릭과 타입 단언 활용
function pairFunc<T, U>(first: T, second: T): U {
  return [first, second] as U; // U === T[]

  // A as U: 타입 단언
  // A(T[])을 U 타입으로 간주하겠다.
}

console.log(pairFunc<string, string[]>('hello', 'world')); // [ 'hello', 'world' ]
// U를 string[]로 설정

//? 제네릭을 사용하는 컴포넌트 예시
//@ 1) 제네릭 함수
function genericFunc<T>(data: T[]): T[] {
  console.log(`배열의 길이: ${data.length}`);
  return data;
}

let resultFunc = genericFunc<boolean>([true, false, true]); //배열의 길이 : 3
console.log(resultFunc);  // [ true, false, true ]

//@ 2) 제네릭 인터페이스
interface IGeneric<T> {
  (key: T): T;
}

function example<T>(data: T): T {
  return data;
}

let myExample: IGeneric<number> = example;
// : myExample은 number 타입을 사용하는 IGeneric
// >> 즉! myExample(5) === example(5)
console.log(example(5)); // 5
console.log(myExample(5));  // 5

//@ 3) 제네릭 클래스
class GenericClass<T> {
  value: T;
  add: (x: T, y: T) => T;

  // # 매개변수로 함수를 받으니까 callback 함수 타입 지정
  constructor(value: T, add: (x: T, y: T) => T) {
    this.value = value;
    this.add = add;
  } 
}

// # 이미 위에서 타입 정해놨으니 이렇게 하지 않는다.
// let a = (x: number, y: number) => x + y;

let myGenericClass = new GenericClass<number>(0, (x, y) => x + y);
console.log(myGenericClass.add(10, 20)); // 30

//? 제네릭 함수 구현 예제
function reverseArray<T>(items: T[]): T[] {
  // 배열 요소 순서 역전 메서드
  // - reverse()
  let reverseArray = items.reverse();
  return reverseArray
}

let stringArr = ['a', 'b', 'c'];
let resultArr = reverseArray<string>(stringArr);
console.log(resultArr); // [ 'c', 'b', 'a' ]

let booleanArr = [true, false, true, true];
let resultArr2 = reverseArray(booleanArr)
console.log(resultArr2);// [ true, true, false, true ]