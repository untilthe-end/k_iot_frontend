/*
  ! 요구사항 정리

  1. 사용자가 "Fetch User Data" 버튼 클릭 시
  2. "Loading user data" 메시지 출력
  3. 실제 데이터 요청이 실행 후 완료 시 사용자 데이터가 화면에 표시
  4. 요청 실패 또는 문제 발생 시, 에러 메시지가 화면에 표시

*/

const fetchButton = document.getElementById('fetchUserData');
// : 요소 검색 시 값 있으면 HTMLElement | 값 없으면 null 반환

// if (fetchButton) {}
// : fetchButton 요소가 존재하는지 확인하는 조건문

// A요소?.속성또는메서드
// : A가 존재할 경우 뒤의 코드 실행, 존재하지 않을 경우 실행되지 않음

// # 'fetchButton' is possibly 'null'
// * 그래서 요소에 ? 한다 Optional.
fetchButton?.addEventListener('click', async () => {
  // # 데이터를 가져오는 작업은 비동기. async await
  // * 오래걸리는 작업은 좀 늦게 가져와짐.
  // : async function() {}
  // : async () => {}
  
  //! DOM 요소 가져오기
  const userDataDiv = document.getElementById('userData'); 
  // # 타입단언 해줘야 아래에서 userIdElement.value 할 수 있음  ↓    ↓    ↓    ↓ 
  const userIdElement = document.getElementById('userId') as HTMLInputElement;

  //! Input 창 내용값 추출
  const userId = userIdElement ? userIdElement.value : '';

  //? apiUrl 저장
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

  if (userDataDiv) {
    userDataDiv.innerHTML = `<p>Loading user data</p>`;

    try {
      // 데이터 (예외 처리 구문 사용)
      const fetchResponse = await fetch(apiUrl);

      if (!fetchResponse.ok) {
        throw new Error('사용자 데이터에 접근할 수 없습니다.');
      }

      // 자바스크립트 객체로 하는 json 형태로 가져오기
      const user = await fetchResponse.json();

      // 데이터 처리 성공 시 데이터 출력
      userDataDiv.innerHTML = `
        <h2>User Details</h2>
        <p>ID: ${user.id}</p>
        <p>NAME: ${user.name}</p>
        <p>EMAIL: ${user.email}</p>
        <p>ADDRESS: ${user.address.street}</p>
      `;
    } catch (e) {
      // 실패시 메시지 출력
      userDataDiv.innerHTML = `<p>${e}</p>`
    }
  }
})