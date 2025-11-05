import { useInputs } from '@/hooks/useInputs';
import React from 'react'

interface MemberInfo {
  name: string;
  email: string;
  phone: string;
}

function Custom03() {
  const { values, bind, handleReset}  = useInputs<MemberInfo>({
    name:'', 
    email: '',
    phone: ''
  });

  const { name, email, phone} = values;


  return (
    <div>
      <h4>회원 정보 입력</h4>
      <div>
        <input type="text" name='name' value={name} onChange={bind.onChange} placeholder='이름' />
      </div>
      <div>
        <input type="text" name='phone' value={phone} onChange={bind.onChange} placeholder='핸드폰 번호' />
      </div>
      <div>
        <input type="text" name='email' value={email} onChange={bind.onChange} placeholder='이메일' />
      </div>
      <p>이름: {name} 핸드폰: {phone} 이메일: {email}</p>
      <button onClick={handleReset}>전체 초기화</button>
    </div>
  )
}

export default Custom03