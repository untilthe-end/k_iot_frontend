// useInputs.ts

import { useState } from "react";

//! 관리할 input이 여러 개인 경우
// : 각각의 useInput을 호출하는 대신 객체 단위로 관리 가능
// & useInputs() 하나만 호출하면 name, email, phone 등 여러 입력값을 객체 하나로 관리

/*
  id: string;
  password: string;
  name: string;
  age: number;
*/

export function useInputs<T extends object>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  // T 객체의 key 속성값들만 모아 유니언 타입으로 생성
  const handleChange = <K extends keyof T>(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  // & <input name="email" value={email} />
  // & name 이 email 인곳에 값을 넣어라
    const { name, value } = e.target;

    // name 이 T의 키들 중 하나일 때만 동작하도록 타입 제한
    if (name in values) {
      setValues(prev => ({
        ...prev,
        [name]: value as T[K]
      }));
    }
  }

  const handleReset = () => setValues(initialValues);

  return { 
    values,
    handleReset,
    bind: {
      onChange: handleChange
    }
  }
}