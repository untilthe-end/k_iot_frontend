// user.service.ts
// 파일명에 . 있는 이유
// user "사용자 관련 기능"
// .service "서비스 로직" 이라는 의미

import { api } from "@/apis/api";

interface User {
  id: number;
  name: string;
  email: string;
}

// CRUD
export const userService = {
  list: async (): Promise<User[]> => {
    const res = await api.get("/users");
    return res.data;
  },
  create: async (user: Omit<User, "id">): Promise<User> => {
    const res = await api.post("/users", user);
    return res.data;
  },
  update: async (id: number, user: Partial<User>): Promise<User> => {
    const res = await api.put(`/users/${id}`, user);
    return res.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  }
}

// Promise - 성공 or 실패
// Omit    -  없는 속성은 빼는 것

// Partial<User> 
// - 사용자 정보 수정시, 모든 정보를 다 보낼 필요가 없다. 
// - 선택적(optional)
/*
{
  id?: number;
  name?: string;
  email?: string;
  age?: number;
}

*/