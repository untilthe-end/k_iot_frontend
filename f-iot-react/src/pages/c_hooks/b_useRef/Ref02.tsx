import React, { useRef, useState } from 'react'

//! useRef를 사용한 DOM 요소 참조
// : 컴포넌트가 재 렌더링되어도 동일한 참조값을 유지
// - 특정 DOM 요소에 접근하고 조작

//? useRef의 특징
// : 단순히 "값 저장"만이 아니라
// - 1) 이전 상태 기억
// - 2) DOM 요소 직접 제어


function Ref02() {
  // # Hooks
  const [numberUp, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  //? DOM 요소 타입 - input(HTMLInputElement), div(HTMLDivElement) 등
  // An argument for 'initialValue' was not provided.
  // DOM 요소는 기본 반환값이 HTMLElement 또는 null 
  // > 기본값 null 권장
  const inputRef = useRef<HTMLInputElement>(null);


  // # Event Handler
  const increment = () => {

    setCount(prevCount => {
      prevCountRef.current = prevCount; // 이전 값
      return prevCount + 1;             // 새로운 numberUp 리턴
    }) ;
  }

  const handleButtonFocus = () => {
    // current 속성값에 요소의 참조값이 담겨 있음 
    if (inputRef.current) {
      inputRef.current.focus();         // input에 포커스 이동
    }
  }

  return (
    <div>
      {/* 이전 상태 기억 */}
      <p>현재 카운트: {numberUp}</p>
      <p>이전 카운트: {prevCountRef.current}</p>
      <button onClick={increment}>증가</button>

      <br />
      {/* DOM 요소 참조 - 직접 조작: Ref 속성에 요소의 참조값을 등록 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonFocus}>input에 포커스</button>
    </div>
  )
}

export default Ref02

/*
  & 1. useState로 현재 값 관리
  & 2. useRef로 이전 값 기억
  & 3. 버튼 클릭 -> 숫자 증가
  & 4. <input type="text" ref={inputRef} />
    : input DOM 요소 자체가 inputRef.current에 담겨
    : 즉, 실제 HTML 태그를 직접 다룰수 있는 "손잡이" 가 생긴 것임.

  # useState: "화면을 다시 그리게 하는 데이터"
  # useRef  : "화면은 그대로 두고 기억하거나 직접 만지는 데이터"

  % useRef: 항상 객체 하나를 만들어 반환 
  % -       current라는 속성이 꼭 포함 되어있음
  * -      .current는 객체 안에 저장된 '실제 값'

*/