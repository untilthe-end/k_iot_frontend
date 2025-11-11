// authApi.ts

import { privateApi, publicApi } from "./axiosInstance";

export interface SignInRequest {
  loginId: string;
  password: string;
}

export interface SignInResponse {
  username: string;
  accessToken: string;
}

// & 로그인
export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const res = await publicApi.post('/auth/sign-in', data);
  
  if (!res.status) throw new Error('Login failed');
  return res.data.data;
}

// & 로그아웃
export const signOut = async (): Promise<void> => {
  await privateApi.post('/auth/sign-out');
}

//# Access Token이 만료 되었을 때 서버에 /auth/refresh-token 요청 보내는 함수
// & 액세스 토큰 refresh
export const refreshAccessToken = async (): Promise<string> => {
  const res = await publicApi.post('/auth/refresh-token', {}, { withCredentials: true });
  if (!res.data.success) throw new Error('Refresh Failed..')
    return res.data.data.accessToken;
}

// .post('/auth/refresh-token', {},)
// {} 은 비어있는 바디 
// widthCredentials - HttpOnly 쿠키에 저장, JS로 접근 불가/ widthCredentials: true

//* return res.data.data.accessToken;
// res.data는 axios 문법
// res.data.data 는 진짜 데이터 
/* {
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs..."
  }
}
*/