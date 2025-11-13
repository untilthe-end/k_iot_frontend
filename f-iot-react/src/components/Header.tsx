import { useUIstore } from "@/stores/ui.store";
import styled from "@emotion/styled";
import React from "react";

function Header() {
  const toggleSidebar = useUIstore((s) => s.toggleSidebar);
  const toggleDarkMode = useUIstore((s) => s.toggleDarkMode);
  const darkMode = useUIstore((s) => s.darkMode);
  const isSidebarOpen = useUIstore((s) => s.isSidebarOpen);
  const showToast = useUIstore((s) => s.showToast);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: darkMode ? "#222" : "#f2f2f2",
    borderBottom: darkMode ? "1px solid #444" : "1px solid #ccc"
  };


  //# 이방법으로 하면 div안에 button 까지 넣을수 있음
  //& @emotion 
  //# 반드시 HTML에서 컴포넌트로 사용해야 함. 
  const ButtonGroup = styled.div`
    display:flex;
    gap: 12px;

    button {
      border: 1px solid #e9e9e9;
      background: white;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
    }
  `;

  const handleReserve = () => {
    // 예약 관련 코드 (프론트 엔드 유효성 검사 + API 호출 + 응답 성공 완료)

    showToast("예약이 완료되었습니다.");
  };

  return (
    <header style={headerStyle}>
      <h3>Korea IoT React</h3>
      <ButtonGroup>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? "메뉴 닫기" : "메뉴 열기"}
        </button>
        <button onClick={toggleDarkMode}>{darkMode ? "밝게" : "어둡게"}</button>
        <button onClick={handleReserve}>예약하기</button>
      </ButtonGroup>
    </header>
  );
}

export default Header;
