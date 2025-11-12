// useInput.ts

import { useState } from "react";

// type은 대문자로 시작
type UseInputReturn = {
  // 입력 필드의 현재 값
  value: string;

  // 초기값으로 되돌리는 이벤트 핸들러
  handleReset: () => void;

  // bind(묶다) - input 속성에 바로 연결 가능한 객체 { value, onChange }
  bind: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
};

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  // # input 태그에 바로 연결할 수 있는 객체 생성
  // * <input {...bind} /> 
  // * value={value} onChange={handleInputChange} 가 자동으로 연결됨

  const bind = {
    // key: value 키와 변수이름이 같으면 생략가능!
    value,
    onChange: handleInputChange,
  };

  return { value, handleReset, bind };
}

/*

# 이렇게 맨날 쓰기 귀찮으니 useInput() 함수로 묶음

& const [name, setName] = useState('');
&<input value={name} onChange={(e) => setName(e.target.value)} />


*/
