import React, { memo, useCallback, useState } from 'react'

//* React.memo : 컴포넌트 버전의 최적화 도구
//* useCallback: 함수버전의 useMemo

// & React.memo: "이전에 받은 선물이랑 똑같으면 굳이 새로 포장 안 할게!"
// & useCallback: "내가 준 선물(함수) 그대로 다시 줄게, 주소 안 바꿀게"
// # 두 개를 같이 쓰면 "부모가 리 렌더링돼도 자식은 그대로 유지"가 가능해진다.

//! useCallback
// : React 함수형 컴포넌트 Hook
// : 특정 콜백함수가 의존성 배열에 명시된 값들이 변경되지 않는 한
//  , 동일한 함수 인스턴스를 유지하도록 해주는 훅
// > 콜백 함수를 메모이제이션(memoization)
// # 주로 자식 컴포넌트에 함수 전달시 사용

//? React 컴포넌트 리 렌더링
// : 함수는 컴포넌트가 리렌더링 (상태 변화 || props 값 변경)될 때마다
//  , 새로운 함수 인스턴스 생성
// +) 해당 함수가 자식 컴포넌트의 props로 전달 되는 경우 
//  > 부모의 리렌더링마다 함수의 주소값이 변경되어 새로운 값으로 인식하고
//    , 자식 컴포넌트를 리렌더링

//! 자식 컴포넌트: 부모로 부터 함수 전달
//? React.memo
// : React에서 불필요한 자식 컴포넌트의 리렌더링을 방지하기 위한
// , 성능 최적화 도구
// > 이전 렌더링 때의 props와 지금 렌더링 때의 props를 비교
// : 동일하면 다시 렌더링하지 않음(스킵)
// : 다르면 재랜더링 실행

//& 자식 컴포넌트(Button)
const Button = memo(({ handleClick }: {handleClick: () => void }) => {
  console.log('버튼이 렌더링되었습니다.');
  return <button onClick={handleClick}>자식 컴포넌트의 버튼</button>;
});


//& 부모 컴포넌트
function a_useCallback() {

  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  //? useCallback 사용 방법
  // * deps는 dependencies 의 의존성배열
  // const 함수명 = useCallback(콜백함수 - 기존 실행 함수, [deps]);

  /*
    const callbackFunc = useCallback(() => {
    }, [deps]);

    ? 배열 안의 deps가 변경될 때만 함수를 다시 생성!
      : 그렇지 않으면 이전에 만든 함수 재사용! (메모이제이션)
  */

  // # Event Handler
  // : 부모 컴포넌트 재 렌더링 마다 새롭게 초기화 + 주소 할당
  // const handleCountClick = () => {
  //   console.log('이벤트 발생');
  //   setCount(prevCount => prevCount + 1);
  // }

    const handleCountClick = useCallback(() => {
    console.log('이벤트 발생');
    setCount(prevCount => prevCount + 1);
  }, [count]);

  console.log('부모 렌더링!');

  let a = 10; // 컴포넌트 재 렌더링 마다 새롭게 초기화 + 할당

  function example() { // 컴포넌트 재 렌더링마다 함수값이 새롭게 할당

  }

  return (
    <div>
      <h5>useCallback</h5>
      <p>Count: {count}</p>
      <button onClick={handleCountClick}>부모 컴포넌트의 버튼</button>
      {/* 
        1) props값 변경으로 리렌더링 - useCallback으로 조절
        2) 실제 부모 컴포넌트의 리렌더링 - useCallback으로 조절 x
      */}
      <Button handleClick={handleCountClick} />

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default a_useCallback

// ? HTML 기본태그
// & <button onClick={handleCountClick}>부모 컴포넌트의 버튼</button>

// ? 사용자 정의(React) 컴포넌트
// & <Button handleClick={handleCountClick} />

// 콘솔창에 console.log('부모 렌더링') 두번 출력되는 이유?
// StrictMode 때문이다. 개발할 때는 일부러 더블체킹해서 side effect 찾으려는 것