import { useInput } from "@/hooks/useInput";
import { useGlobalStore } from "@/stores/global.store";
import React, { useState } from "react";

function GlobalData() {
  // const [value, setValue] = useState<string>();
  const { bind } = useInput(""); 
  // 주석처리한 setValue와 handleSelectChange 를 onChange로 대체
  const { value, onChange } = bind;

  // # 구조 분해 할당 시 속성명 변경
  // const {실제속성값: 변경할속성값} = 반환할 값;
  // bind가 bind2에 들어감

  const { bind: bind2 } = useInput("");
  const { value: value2, onChange: onChange2 } = bind2;
  const { categories, regions } = useGlobalStore();

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setValue(e.target.value);
  // };

  return (
    <div>
      <h4>카테고리 사용</h4>
      <select value={value} onChange={onChange}>
        <option value="">카테고리 선택</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      <hr />
      <h4>지역사용</h4>
      <select value={value2} onChange={onChange2}>
        <option value="">지역 선택</option>
        {regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GlobalData;

// # 배열 순회하면 key= 속성이 무조건 있어야 한다.
