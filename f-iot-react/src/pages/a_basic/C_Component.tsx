import React from 'react'
// import B_React_Counter from './B_React_Counter';
import B_React_Counter from '@/pages/a_basic/B_React_Counter';

import dog from '@/assets/images/강아지이미지.jpg';

/*
  ! 컴포넌트(Component)
  : 사용자 인터페이스(UI)를 구축하는 기본 단위 요소
  - 함수형 컴포넌트 사용

  ? 컴포넌트 사용 방법
  1) 컴포넌트 내보내기
    > export default : 컴포넌트명 변경 가능    {} 미사용
    > export         : 컴포넌트명 변경 불가능   {} 사용

  2) 컴포넌트 가져오기
    > 불러올 환경에서 경로 지정
    : Vite React는 상대경로, 절대경로 모두 사용 가능
    : @(기본 URL 설정)를 사용한 절대 경로 사용 권장!
    > vite.config.ts와 tsconfig.app.json 파일에 각각 경로 지정 필수!

# vite.config.ts 에 붙여넣기
export default defineConfig({
  plugins: [react()], //! React JSX를 인식하기 위한 플러그인
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //! @ 기호를 src 폴더로 인식
    }
  }
})

# tsconfig.app.json 에 붙여넣기
? skip 아래 부분에 baseUrl 과 paths 추가
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },


? 컴포넌트 특징 
# 파일명 반드시! 대문자 시작 (UpperCamelCase 사용)
  Ex) MainContainer, NavBar, Signup 등
      - JS/TS의 일반 함수 형태와 구분
# > 일반 함수 (lowerCamelCase 사용)

: rfc, rfce 스니펫 사용 시
  - 파일명이 함수명으로 구현, 해당 함수는 컴포넌트로 인식
  - 파일명을 대문자로 작성 권장

  cf) index.tsx 파일명
  : 폴더명을 활용한 import 사용을 위함
# 내부의 함수(컴포넌트)명은 대문자로 수정
  - 외부에서 인식 가능한 컴포넌트로 생성
*/

// & function Img() { ... } 는 TS 코드 영역
// * TypeScript 코드 안에서 HTML(JSX) 작성

//! 컴포넌트 생성
// Img 컴포넌트
export function Img() {
  //? TS 코드 내에서 HTML 코드 작성 시
  // : () 소괄호 내에 작성 
  // : return() 여기를 뜻함. 

  //? HTML 코드 내에서 TS 코드 작성 시
  // : {} 중괄호 내에 작성
  //? 함수형 컴포넌트(TSX)는 return 시 HTML을 반환

  // # return 안에는 html 코드 시작합니다~
  return (
    // 컴포넌트 내의 HTML 코드 작성 시
    // : 최상위 노드는 반드시 하나여야 함!
    // - 비워질 수 없음! 
    // # <div> 하나 ok
    <div>
      <p>Img 컴포넌트의 시작</p>
      {/* HTML 코드 내에서 TS 문법 사용시 {} 사용 */}
      <img src={dog} alt="dog img" width={300} />
    </div> 
    // <div>

    // </div> 
  );
}

//? 일반 함수 (컴포넌트 x)
// HTML) 대소문자 구분 X: <p> === <P> 
// TSX) 대소문자 구분 o: <p> !== <P> 
//      >> React 컴포넌트
export function img() {
  return '이미지 (일반 함수)';
}

function C_Component() {
  // TSX 컴포넌트 사용 시
  // : 마크업(태그)이 1개인 경우 () 소괄호 생략 가능
  // - 여러 개일 경우 반드시! 소괄호로 감싸서 표현
  return (
    <div>
      {img()}
      {/* 컴포넌트 태그는 단일 태그 사용 권장 <컴포넌트명 /> */}
      <Img />
      <Img />
    </div>
  )
}

export default C_Component

//# return () 안에서 <Component명 /> 호출 