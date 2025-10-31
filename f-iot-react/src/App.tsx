import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basic from "@/pages/a_basic";
import RoutePages from "@/pages/b_Route";
import Navibar from "./components/Navibar";
// 기본 내보내기가 아니면 {} 중괄호 필요함

function App() {
  return (
    <>
    {/* 예시: 네이버 헤더는 계속 그대로다. */}
    {/* localhost:5173 */}
      <h1>Korea IoT React</h1>
      <Navibar />

      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path='/basic' element={<Basic />} />
        {/* 중첩 라우팅 사용을 위해서 반드시 부모 Route의 path 끝에 /*가 필수!
            - 중첩된 자식 라우트 인식 */}
        <Route path='/route/*' element={<RoutePages />} />

      </Routes>
    </>
  );
}

export default App;

// # <> 빈 태그는 <Fragment>의 축약형
// # 여러 요소를 묶되, 실제 DOM에 아무 태그 안 생김
// # 불필요한 <div> 줄임 → HTML 구조 깔끔
// * <> 는 React에서 '보이지 않는 부모 태그 역할'
// # 그리고 <div>는 블록요소라 가로를 100% 다 차지함
