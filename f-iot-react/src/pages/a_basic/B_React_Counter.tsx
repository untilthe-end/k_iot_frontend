import React, { useState } from 'react'

// cf) 리액트 코드 스니펫(자동 완성 기능) 확장 플러그인
//* React Snipptes 설치
//* Snippet
//* → 자주 쓰는 코드 구문을 빠르게 입력할 수 있게 한
//*  "짧은 코드 템플릿"

//# Extension에서 아래 2개 설치
//? ES7 + React/Redux ....
//? TypeScript React code snippets

// - 리액트에서 사용할 다양한 코드 집합 제공
//# 1) imr: import React from 'react'
//    > 리액트 가져오기
// import React from 'react'

//# 2) nfn: const functionName = (params) => {}
//    > 명명된 함수 생성
// const 이름 = (파리미터) => { 코드작성 }

//! rfce: 함수형 컴포넌트 구조 생성
function B_React_Counter() {

  //! 리액트 VS TS 차이
  // 1) UI 컴포넌트가 클래스 or '함수' 형태로 작성
  //    : 함수형 컴포넌트 사용 권장
  // 2) 컴포넌트 기반으로 UI와 상태 관리를 구현

  //? 함수형 컴포넌트를 사용하는 리액트 기능: hook(훅)
  //# useState() 가 Hook
  //# 리액트의 상태 관리 기능을 함수형 컴포넌트에서 쓸 수 있게 하는 도구
  //  <number>(0) 0 이 count = 0 이라는 말임.
  const [count, setCount] = useState<number>(0);


  //# 익명 함수 쓰는 이유?
  // 현재 컴포넌트 안에서만 쓰니까, 굳이 이름 따로 지어서 export 할 필요가 없다.

  const increment = () => { 
    setCount(count + 1);  
  }

  const decrement = () => { 
    setCount(count - 1);  
  }

  //# return ?
  //  함수가 결과로 돌려주는 값 -> 즉, 화면(UI)

  return (
    <div>
      <p>VS 타입스크립트(카운터 예제)</p>
      <p>Count: {count}</p>
      {/* 
        ? JSX(TSX)에서는 속성 지정 시 lowerCamelCase 사용
        - js(ts): onclick 속성
        - jsx(tsx): onClick 속성
      */}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}

// 기본 내보내기: 해당 모듈 사용 시 import에서 이름 변경 가능
export default B_React_Counter

//# 결국, 리액트는 컴포넌트(함수) 작성하고 return()으로 HTML 화면에 뿌려준다.