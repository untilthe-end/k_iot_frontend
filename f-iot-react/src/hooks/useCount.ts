// useCount.ts
// : Custom Hooks - 함수/기능

import { useState } from "react";

// useCount 사용할때 인자로 number 타입의 initialValue 가져옴
// 외부 훅: T 타입이긴 한데 number야 라고 알려줌
export function useCount<T extends number>(initialValue: T) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => (prev + 1) as T) ;
  const decrement = () => setCount(prev => (prev - 1) as T) ;
  const reset = () => setCount(initialValue);

  return {count, increment, decrement, reset};
}