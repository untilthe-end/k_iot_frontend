// React 스니펫: rfce [React Function Component Export default]
// - tsx파일 반드시 컴포넌트 형식 / HTML요소를 반환

// cf) ts파일은 일반 ts 문법 코드 형식 / 모듈(변수, 함수, 클래스) 반환

//! 1. Component
//: 컴포넌트, 사용자 인터페이스(UI)를 구축하는 기본 단위

// cf) 사용자 인터페이스(UI)를 구축하는 기본 단위

// cf) 사용자 인터페이스(UI)
// : 사용자와 컴퓨터 시스템 사이의 의사소통 매개체 (화면!)

// - 화면을 구성하는 코드 집합 (재사용 가능)
// - 재사용은 export(내보내기)와 import(가져오기)를 통해 구현

// - 파일명이 반드시 '대문자'로 시작 (UpperCamelCase)
// cf) 일반 함수(기능적)는 '소문자'로 시작 (lowerCamelCase)

// - HTML 요소를 반환
// : 함수형 컴포넌트의 return 키워드 뒤에서 작성
// : 반환되는 컴포넌트가 한 개 일 경우 () 소괄호 생략
//                    두 개 이상일 경우 () 소괄호 필수

//! 2. JSX(TSX) 문법 체계
// 1) 단일 루트 노드
// : 최상단 루트 태그 존재
// - 최상단에 형제 태그 x !! 반드시 하나의 부모만 가능 ~
// - <></> 빈 Fragment 태그 사용

// 2) 대그 닫기

// 3) 대소문자 구분
// - 소문자 태그: HTML 요소로 인식
// - 대문자 태그: 사용자 정의 '컴포넌트' UI로 인식
//    >> <Img /> 태그가 오류 나는 상황
//       - 1) 해당 컴포넌트를 생성하지 않음
//       - 2) 해당 컴포넌트를 import 하지 않거나 경로가 잘못됨

// 4) JSX 내에서 HTML 코드 작성 시
// - 대부분 lowerCamelCase 사용 권장
// : css 속성, on- 이벤트 핸들러 등
// - class명 속성은 className으로 대체

export function ExampleComponent() {
  let name = '율곡 이이';
  let fruits = ['사과', '오렌지', '망고'];

  // function: JS 문법
  // >> JS 문법 내에서 HTML 코드 작성 시 () 소괄호 사용
  //  : return 뒤 () 소괄호
  // # () 소괄호 안의 코드는 전부 HTML !! 
  return (
    <>
      <h1>20251030 강의</h1>
      <p>복습중...</p>
      {/* HTML 코드 내에서 JS 코드 작성 시 {} 중괄호 사용 */}
      <p>{name} 강사</p>
      {/* 배열 순회 출력 */}
                {/* 배열요소, 인덱스 번호, 배열그자체 */}
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </>
  );
}
import React from 'react'

function F_Review() {
  return (
    <div>F_Review</div>
  )
}

export default F_Review

// # 함수형 컴포넌트
// React에서 컴포넌트는 '화면을 그려주는 함수' => return()안에 HTML 처럼 보이는
// # JSX 문법 = JavaScript + XML 