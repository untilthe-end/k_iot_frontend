import React from 'react'

// 설명서(형태 정의)
interface User {
  name: string;
  age: number;
}

type Greeting = (user: User) => string;

// 실제 코드
const sayHello: Greeting = (user: User) => `안녕하세요, ${user.name}님!`;

function myPractic() {
  const user: User = { name: '진', age: 29 }

  return (
    <div>
        <p>{sayHello(user)}</p>
    </div>
  )
}

export default myPractic