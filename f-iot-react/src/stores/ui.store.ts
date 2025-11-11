//! ui.store.ts

import { create } from "zustand";

// : UI/전역 인터랙션 상태
// - 컴포넌트 간에 UI제어 상태를 공유해야 할 때 사용
// +) 브라우저 세션과 무관하게 상태값 지속할 경우 zustand + localStorage 저장 필수
// * 노션 사이드바 닫거나 열어놓았을 때 

//? 전역에서 관리할 데이터(상태) + 함수(행동) 목록 정의
interface UIState {
  isSidebarOpen: boolean;           // 사이드바 열림/닫힘 여부
  isModalOpen: boolean;             // 모달 표시 여부
  darkMode: boolean;                // 다크모드 활성화 여부
  toastMessage: string | null;      // 토스트 메시지 (없을 때는 null) // = 'ooo'가 'oo'을 처치했습니다.

  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  showToast: (msg: string) => void; // 매개 변수 값을 toastMessage에 할당
  hideToast: () => void;            // 함수가 아무 인자도 받지 않기 때문에 내부에서 toastMessage를 null로 할당
}

//? 스토어 생성
// create(): 스토어 생성
// create(): 안에는 '콜백 함수'가 들어간다.
// > 매개변수) set 설정 함수          - UIState 내부 속성 업데이트 함수
// >   반환값) UIState 타입의 객체

//# 중괄호 감싸져있으면 구현부랑 헷갈리니 () 소괄호 추가한다는데 ?
//& 화살표 함수(=>) 의 반환값이 '객체'일 때,
//& 객체를 중괄호{}로 감싸져있으면 자바스크립트가 "함수 구현부"로 오해하니까,
//* 소괄호 ()로 감싸서 "이건 반환값이야" 라고 명확히 표시하는 것

//! UI 관련 전역 상태를 저장하고 조작하는 storage (중앙창고)
export const useUIstore = create<UIState>((set) => ({
  // ✅ 초기 상태 기본값 설정
  isSidebarOpen: false,
  isModalOpen: false,
  darkMode: false,
  toastMessage: null,

  // ✅ 상태 바꾸는 함수
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  showToast: (msg) => set({ toastMessage: msg }),
  hideToast: () => set({ toastMessage: null }),
}));


// & Zustand create() 가 useState() 와 비교했을때 장점
// * 상태를 관리하지만, 컴포넌트간 공유가 가능하다.

//& set() 은 상태 업데이트 함수인데, setState()와 같은 역할. 