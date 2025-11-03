import React, { useState } from "react";

//! useState: "컴포넌트 내에서" 데이터에 대한 상태 관리
// - 주로 UI에서 발생하는 이벤트에 반응하여 상태 변화

interface Login {
  id: string;
  password: string;
}

const loginInitialValue: Login = {
  id: "",
  password: "",
};

function State02() {
  //# === HOOKS (useState) === //
  const [inputValue, setInputValue] = useState<string>("");

  
  // * 아래처럼 각각 분리도 가능함
  // const [id, setId] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  
  // * 하나의 객체로 받음
  const [login, setLogin] = useState<Login>(loginInitialValue);
  const { id, password } = login; // 구조 분해 할당

  //# === EVENT HANDLER === //
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // input 창에 change 변화가 일어나면 처리(handle)할 로직

    let inputValue = e.target.value;
    // 이벤트 객체의 target 속성 === 이벤트가 발생한 input 태그
    setInputValue(inputValue);

    console.log(inputValue);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  const handleLoginChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받는 e(이벤트 객체)의 target
    // : 이벤트가 발생된 요소
    // > target 요소 내의 속성에 접근 가능
    // e.target
    // : name과 value값을 추출
    // - name값) 상태 변수의 이름과 일치 OR 상태 변수 객체 내의 속성명과 일치
    // - value값) 사용자로부터 입력받는 값

    // # .target은 DOM (Object)
    const { name, value } = e.target; 
    console.log(name);
    console.log(value);

    // 객체 타입
    setLogin({
      ...login, // id와 password 속성을 모두 가지는 login 객체 (이전의 값 가져오기)

      // 변경하고자 하는 name 키를 가진 value 값 변경 (해당 필드만 값 업데이트)
      [name]: value // name.value (x)
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출되는 기본 동작 방지

    console.log('form 데이터 제출 완료!', login);

    // 데이터에 대한 활용(제출, 사용) 후에는 초기화가 필수
    setLogin(loginInitialValue);
  }

  const handleResetLogin = () => {
    setLogin(loginInitialValue);
  }

  return (
    <div>
      <p>useState & 이벤트 핸들러</p>

      <input
        type="text"
        value={inputValue}
        // onChange 이벤트
        // : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
        // - input, select, textarea 등의 요소에 적용
        onChange={handleInputChange}
      />

      <br />
      <select onChange={handleInputChange}>
        <option value="Soccer">Soccer</option>
        <option value="Baseball">Baseball</option>
        <option value="Hockey">Hockey</option>
      </select>
      <br />
      <button onClick={handleResetClick}>Reset Button</button>
      <p>Input Value: {inputValue}</p>

      <h4>여러 개의 입력 상태 관리</h4>
      <form onSubmit={handleLoginSubmit}>
      <input
        type="text"
        name="id"
        value={login.id}
        placeholder="아이디"
        onChange={handleLoginChange}
      />
      <input
        type="text"
        name="password"
        value={login.password}
        placeholder="비밀번호"
        onChange={handleLoginChange}
      />
      {/* <p>아이디: {login.id} / 비밀번호: {login.password}</p> */}

      {/* 아래는 구조분해 할당하여 편리하게 가져옴 */}
      <p>아이디: {id} / 비밀번호: {password}</p>
      <button type='button' onClick={handleResetLogin}>Reset</button>
      <button type='submit'>전송하기</button>
      </form>

    </div>
  );
}

export default State02;

// # select에서 onChange= 하지 않으면 값을 사용할 수 없다.
// # 내용값이 안바뀌면 재 렌더링 하지 않는다.

// * 구조분해 할당 ... value 와 name 속성을 한! 번에 가져오기 위해 . 