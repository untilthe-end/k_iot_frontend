// api.ts
// : 서버와 통신하는 API 호출 관련 로직 정의 (코드 재사용 및 모듈화)

//# HTTP 요청을 보내는 라이브러리
//& 브라우저와 서버가 "데이터를 주고 받는 우편배달부"
//& React(또는 Node.js)에서 API 서버랑 통신할 때 사용하는 도구

import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api/v1';

//? cf) process.env.REACT_APP_API_BASE
// : 환경 변수
// - REACT 앱에서 API 서버의 기본 URL 같은 설정값을 외부에서 주입받을 때 사용

// api.get("/users");
// api.post("/login", data);
//& 기본 설정이 저장된 "전용 axios 인스턴스" 만드는 것
export const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 10000,     
  // 10초 타임아웃 - 서버와의 통신이 10초 이상 걸릴 경우 자동으로 요청 취소 + 타임아웃 에러 발생
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
});

//# Axios 특징
//& 1) Promise 기반   : .then() / await 사용 가능
//& 2) 자동 JSON 처리  : 객체를 JSON으로 변환하거나 파싱 자동
//    JSON.stringify() 나 JSON.parse() 안써도됨
//& 3) 응답 객체 구조화 : response.data만 확인! 
//& 4) 인터셉터 지원    : 요청/응답 가로채기 가능 (토큰/에러 처리 등)
//& 5) Axios 인스턴스  : 공통 설정을 모아 재사용 가능

//? Axios 응답 구조(response)
// EX) const response = await axios.get("URL 경로");

/*
  % response: 객체 구조
  {
    data      : { ... },  - 실제 데이터
    status    : 200,      - HTTP 상태 코드
    statusText: ok,       - 상태 메시지
    headers   : { ... },  - 응답 헤더
    config    : { ... },  - 요청 설정
    request   : { ... }   - 요청 객체
  }

  const data = response.data
*/

//? axios에서 요청(request)과 응답(response)을 가로채서 처리(intercept)
//? 모든 API 요청과 응답에 자동으로 추가 동작을 붙인다. 

//& API 요청 보내기 전
//# 요청 인터셉터: 로컬스토리지에 저장된 토큰을 자동으로 헤더에 붙임

//& InternalAxiosRequestConfig (속성)
//? url/ method/ baseURL/ headers/ params/ data/ timeout/ withCredentials/ responseType
//? transformRequest/transformResponse/signal\
//& Config 안에는 요청을 보낼때 필요한 모든 정보가 들어있다.
// api.interceptors.request.use(요청설정이행, 요청설정에러)
//& 브라우저의 localStorage

// [인터셉터 등록]
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers){
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}, (e) => Promise.reject(e));

//& 서버 응답 받은 후
//# 응답 인터셉터: 401 처리(Unauthorized: 자격 증명 부족), 에러 포맷 통일
// api.interceptors.request.use(요청설정이행, 요청설정에러)

// & ? 는 "있을 수도 있고 없을 수 도 있을 때"
// * 오류안내고 undefined
api.interceptors.request.use(response => response, (e) => {
  const status = e?.response?.status;

  if (status === 401) {
    // 예: 토큰 만료 -> 리프레시 시도 or 로그아웃
    localStorage.removeItem('accessToken');
    // 필요 시 로그인 페이지로 이동
    // window.location.href = '/login';

    // 에러 객체 구조 통일
    return Promise.reject(e);
  }
})

// 서버 응답이 401 Unauthorized (토큰이 없거나 만료됨)일 때,
// - 저장된 토큰을 지움 (localStorage.removeItem)
// - 필요하면 로그인 페이지로 이동시킬 수도 있음 (주석 처리된 부분)
// >> 토큰이 만료되면 자동으로 로그아웃 처리하거나 다시 로그인하게 만드는 코드