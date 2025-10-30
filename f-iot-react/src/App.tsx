import './App.css'
import Basic from '@/pages/a_basic'
// 기본 내보내기가 아니면 {} 중괄호 필요함

function App() {
  return (
    <>
      <h1>안녕하세요 첫 리액트입니다.</h1>
      <Basic />
    </>
  )
}

export default App

// # <> 빈 태그는 <Fragment>의 축약형
// # 여러 요소를 묶되, 실제 DOM에 아무 태그 안 생김
// # 불필요한 <div> 줄임 → HTML 구조 깔끔
// * <> 는 React에서 '보이지 않는 부모 태그 역할'
// # 그리고 <div>는 블록요소라 가로를 100% 다 차지함