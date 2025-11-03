import React from "react";
import type { User } from "./State06";

// # userData: User | undefined;
// # 같은 형태를 ChildProps라고 부를게 ~

// * ChildProps는 "State06_Child 컴포넌트가 받을 Props 타입"을 정의한 것
// * 'myData' 이름의 prop 이 오는데, 그 타입은 User 거나 undefined 일수 있어.
type ChildProps = {
  myData: User | undefined;
};

function State06_Child({ myData }: ChildProps) {
  return (
    <div>
      <p>자식 컴포넌트 (부모로부터 데이터를 전달받음)</p>
      {myData && (
        <>
          <p>사용자 이름: {myData.name}</p>
          <p>사용자 키: {myData.height}</p>
        </>
      )}
      {/* 
      <p>{userData.name}</p>
      이렇게 안되는 이유는? undefined일 수도 있으니 논리연산자로 위에처럼 함.
      */}
    </div>
  );
}

export default State06_Child;
