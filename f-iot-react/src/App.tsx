import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Basic from "@/pages/a_basic";
import RoutePages from "@/pages/b_Route";
import Hooks from "@/pages/c_hooks";
import HTTP from "@/pages/d_http/";
import GlobalState from "@/pages/e_global_state/";

import Navibar from "./components/Navibar";
import PostList from "./_practice/a_basic/PostList";
import PostDetail from "./components/PostDetail";
import SearchApp from "./_practice/c_hooks/SearchApp";
import Z_Products from "./pages/b_Route/Z_Products";
import Z_ProductDetail from "./pages/b_Route/Z_ProductDetail";
import Z_ProductInfo from "./pages/b_Route/Z_ProductInfo";
import Z_ProductReviews from "./pages/b_Route/Z_ProductReviews";
import Z_Dashboard from "./pages/b_Route/Z_Dashboard";
import { useUIstore } from "./stores/ui.store";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toast from "./components/Toast";

// 기본 내보내기가 아니면 {} 중괄호 필요함
function App() {
  // zustand의 store는 호출 시 내부의 스토어를 객체 형식으로 반환
  // const { 전역상태내부의 속성 또는 함수명} = useUIStore(); 
  // > 내부의 모든 속성과 메서드 호출 후, 좌항에 일치하는 값만을 남김

  // 필요한 속성, 메서드만 뽑아서 반환
  const darkMode = useUIstore(s => s.darkMode); // true: 다크 / false: 라이트

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? "#111" : "#f2f2f2",
    color: darkMode ? "#ccc" : "#111",
    transition: "all 0.3s ease"
  }


  return (
    <div style={appStyle}>
      {/* 경로와 상관없이 렌더링 */}
      {/* <h3>Korea IoT React</h3> */}
      <Header />
      <Sidebar />
      <Navibar />

      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path='/basic' element={<Basic />} />
        {/* 
          중첩 라우팅 사용을 위해 반드시 부모 Route의 path 끝에 /*가 필수! 
          - 중첩된 자식 라우트 인식
        */}
        <Route path='/route/*' element={<RoutePages />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/http' element={<HTTP />} />
        <Route path='/global-state' element={<GlobalState />} />

        {/* //@ _practice 실습 코드 */}
        <Route path='/practice/post' element={<PostList />} />
        <Route path='/practice/post/:id' element={<PostDetail />} />
        <Route path='/practice/search' element={<SearchApp /> } />

        {/* //@ pages/b_Route - Z_실습 코드 */}
        {/* 절대경로 */}
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products' element={<Z_Products />} />
        <Route path='/products/:id' element={<Z_ProductDetail />}>
          {/* 중첩 라우트: 상대경로 */}
          <Route path='info' element={<Z_ProductInfo />} />
          <Route path='reviews' element={<Z_ProductReviews />} />
        </Route>
        <Route path='/dashboard' element={<Z_Dashboard />} />
        
      </Routes>
      <Toast/>
    </div>
  )
}

export default App;

//% "/" : 절대 경로
//% ""  : 상대 경로

//* 중첩라우트?
//* "상품 상세 페이지" 안에 세부 정보 탭, 리뷰 탭
//* "상세 페이지 안에 또 다른 페이지"

// & path="/" 주소창에 홈화면이면 /products 경로로 바로 이동함

// # <> 빈 태그는 <Fragment>의 축약형
// # 여러 요소를 묶되, 실제 DOM에 아무 태그 안 생김
// # 불필요한 <div> 줄임 → HTML 구조 깔끔
// * <> 는 React에서 '보이지 않는 부모 태그 역할'
// # 그리고 <div>는 블록요소라 가로를 100% 다 차지함
