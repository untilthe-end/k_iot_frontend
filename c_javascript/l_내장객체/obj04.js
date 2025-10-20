// obj04.js

// ! 객체의 속성 존재 여부 확인
// : 객체에 존재하지 않는 속성에 접근: undefinde
// > 조건문 + undefined 여부 확인

let obj = {
  name: '이승아',
  height: 170,
  job: 'developer'
}

if (obj.name !== undefined){
  console.log(obj.name);
} else {
  console.log('name 속성 x');
}

// ! 조건문을 연산자로 검증 
// * if ~ else 보다
// # 논리 연산자 + 삼항연산자가 더 중요함!

console.log('=== or 연산자 ===');
obj.name || console.log('name 속성 x');  // 출력안됨.   (obj.name 이 벌써 True 여서 뒤에꺼 실행안함.)
obj.hobby || console.log('hobby 속성 x');// hobby 속성 x 

// ? and 연산자: 모두 true여야 true
obj.name && console.log('name 속성 o'); // name 속성 o (name 속성이 있어서 뒤에것도 실행해서 출력됨)
obj.hobby && console.log('hobby 속성 o');// 출력안됨 (hobby 속성 없어서 뒤에거 출력안됨)

// 2) 삼항 연산자
// : 객체의 기본 속성 지정
obj.name = obj.name ? obj.name : '비회원 고객';
console.log(obj.name); // 이승아

obj.nickname = obj.nickname ? obj.nickname : '임시 닉네임';
console.log(obj.nickname); // '임시 닉네임'

// >> 논리 연산자 변환
obj.name = obj.name || '이름을 알 수 없음';
obj.age = obj.age || '나이를 알 수 없음';

console.log(obj.name); // 이승아
console.log(obj.age); // 나이를 알 수 없음