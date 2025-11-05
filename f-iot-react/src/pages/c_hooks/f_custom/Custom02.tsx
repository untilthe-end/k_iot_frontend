import { useInput } from "@/hooks/useInput";
import React, { useState } from "react";

type UserInfo = {
  name: string;
  email: string;
};
function Custom02() {
  // const [userInfo, setUesrInfo] = useState<UserInfo>({
  //   name: "",
  //   email: "",
  // });

  // const handleInputChange = () => {};

  //! useInput 사용방법
  const example01 = useInput("");
  const {
    // value 속성을 name이라는 변수에 저장
    // & nameBind라는 변수를 HTML에서 쓸거야.
    value: name,
    handleReset: nameReset,
    bind: nameBind,
  } = example01;

  const {
    value: email,
    handleReset: emailReset,
    bind: emailBind,
  } = useInput("");

  // & 구조 분해 할당
  const person = { nickname: "hehe", age: 28 };
  const { nickname, age } = person;
  console.log(nickname);
  console.log(age);

  // & 구조 분해 할당 시 가져오는 데이터 명칭(키) 변경
  // const { 실제 속성값: 변경할명칭 } = 분해할데이터;
  const { nickname: nn} = person;
  console.log(nn);

  const handleAllRest = () => {
    nameReset();
    emailReset();
  }
  return (
    <div>
      <p>Name: {name}</p> 
      {/* bind 객체 */}
      {/* value={사용자입력값} */}
      {/* onChange: (e: React.ChangeEvent<HTMLInputElement>) */}
      <input type="text" name="name" placeholder="사용자 이름" {...nameBind} />
      <button onClick={nameReset}>이름 초기화</button>

      <p>Email: {email}</p>
      <input
        type="text"
        name="email"
        placeholder="사용자 이메일"
        {...emailBind}
      />
      <button onClick={emailReset}>이메일 초기화</button>

      <button onClick={handleAllRest}>전체 초기화</button>
    </div>
  );
}

export default Custom02;
