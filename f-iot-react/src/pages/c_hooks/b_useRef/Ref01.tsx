import React, { useRef, useState } from 'react'

//! === useRef ===
// use + References(참조)
// : 변경 가능한 참조 객체를 생성할 수 있는 기능이자 '훅'
// : React에서 값을 기억하거나 DOM 요소를 직접 조작할 때 사용하는 특별한 변수
// # 데이터가 될 수 도 있고 DOM 자체일수 있음.

//? 사용 목적
// - DOM 요소에 직접적으로 접근하고 조작
// - 컴포넌트가 재렌더링될 때도 값이 유지되는 변수 관리
// - 이전 상태를 기억 (렌더링 사이에도 지속되는 값 유지)

// # 한번만 초기화 하자~ 여러번 비효율적이게 하지말고
// * useState는 배열 반환

//? 기본 구조
// const refContainer = useRef<valueType>(initialValue);

// # refContainer
//  useRef는 객체 반환 // *useState는 배열 반환
// - 해당 객체는 current 속성을 포함
// - 컴포넌트 재렌더링과 무관하게 값이 유지

// # refContainer.current
// : 저장된 현재 값에 접근

// ? 1) 컴포넌트 실행 - 렌더링 함수 (화면을 그리기위해 1번만 실행)


// % 재 렌더링 될 때 이 함수가 다시 실행되고
// % 입력이 없으면 일반 변수 let lengthVar = 0; 된 채로 return 하니까 0으로 출력
function Ref01() {
  // # Hooks
  //? 12) 예약된 데이터를 text값에 반영 - 'a'
  const [text, setText] = useState<string>(''); //? 구조분해 할당 됨

  //? useRef VS 일반 변수 let
  // * 1) useRef: 재 렌더링 사이에도 값이 유지
  //  - 값을 바꿔도 컴포넌트를 재 렌더링하지 않음
  //  - 값은 항상 최신값으로 유지 (.current 값을 계속 업데이트)
  //? 13) 'a'의 길이값 1 유지
  const lengthRef = useRef<number>(0); //? 2) useRef 호출 시 {current: 0} 객체 생성 & 저장

  // * 2) 일반 변수
  //  - 함수형 컴포넌트는 변화를 감지하면 재 렌더링 될 때마다 함수 전체 다시 실행!
  //  - 아래의 number 변수가 매번 새로 초기화 됨!
  //? 14) 컴포넌트 재실행으로 변수 새롭게 선언되고 다시 0 ~
  let lengthVar = 0;  //? 3) 지역변수 - 컴포넌트가 실행될 때마다 매번 새롭게 만들어짐
  
  // # Event Handler
  // ? 6) 사용자의 입력에 반응하여 handleInputChange 이벤트 핸들러 실행
  // % 입력없으면 return으로 바로감.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // # setText()는 React의 상태(state)를 바꾸는 함수라서
    // # React가 "아, 화면을 다시 그려야겠구나~" 하고 다시 렌더링을 해

    //? 7) 리액트의 상태 변경 요청 (실시간 반영 x)
    //&  이벤트가 다 끝나면, 리 렌더링 진행 (+ 변경값은 예약됨) 
    setText(e.target.value);

    //? 8) useRef로 만든 참조 객체의 .current값 수정
    // : 일반 JS 객체 속성 변경과 동일
    // -  ref는 상태 관리와 무관하고 값이 바로 바뀜(렌더링 x)
    lengthRef.current = e.target.value.length; 

    //? 9) 일반 변수의 데이터 수정
    // : 함수 안의 지역 변수 변경 (렌더링 함수 내부에만 존재, 화면과 연결 x = 렌더링 x)
    lengthVar = e.target.value.length; 

    //? 10) ref 참조의 현재값(수정된 값)으로 출력
    console.log(lengthRef.current);    // 3

    //? 11) 화면이 아니라 '개발자 도구 콘솔창'에 출력
    // : React가 렌더링하기전에 JS 코드 실행
    console.log(lengthVar);            // 3
  }

  // & lengthRef - 이전 값 그대로 유지 (useRef 가 기억함)
  // & lengthVar - 다시 0으로 초기화 (새 함수 실행)
  // # 함수 실행 다 하면 재 렌더링 되는데, 예약된 데이터로 텍스트값 출력

  return (
    <div>
      {/* ? 4) 현재의 초기화 값으로 2개의 p태그 모두 0을 가짐  */}
      <h4>현재 텍스트 길이 측정 예제</h4>
                                              {/* 5) 사용자 입력 */}
      <input type="text" value={text} onChange={handleInputChange} />  
      <p>재 렌더링 시에도 값이 유지되는 Ref 값: {lengthRef.current} </p>
      {/* 콘솔에는 lengthVar가 계속 찍히지만, 화면에는 반영되지 않음! 
          >> 실제로 화면이 렌더링될 때는 이미 새로운 값(0)으로 다시 초기화 된 상태
      */}
                                                    {/* 0으로 초기화된 값 */}
      <p>컴포넌트가 렌더링 될 때마다 초기화되는 값: <strong>{lengthVar}</strong></p>
    </div>
  )
}

export default Ref01