const fetchButton = document.getElementById('fetchUserData');

// 버튼을 클릭하면
fetchButton?.addEventListener('click', async() => {
  const userIdElement = document.getElementById('userId') as HTMLInputElement;

  const userDataDiv = document.getElementById('userData');

  // * 최상위 요소 HTMLElment 
  // # HTMLElement 는 .value 속성이 없다. 
  // # 그래서 단언! as 특정한 HTMLInputElement 
  // # value는 input, textarea, select 같은 입력하는 요소에만 있다.
  // Property 'value' does not exist on type 'HTMLElement'

  const userId = userIdElement ? userIdElement.value : '';

  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

  if (userDataDiv) {
    userDataDiv.innerHTML = `<p>Loading user data</p>`;

    try {
      const fetchResponse = await fetch(apiUrl);

      if (!fetchResponse.ok) {
        throw new Error('사용자 데이터에 접근할 수 없습니다.');
      }
      // # 브라우저는 문자만 그대로 가져오니 json형태로 객체화
      // # user.id | user.name 처럼 쓰기 위해서 
      const user = await fetchResponse.json();

      userDataDiv.innerHTML = `
        <h2>User Details</h2>
        <p>ID: ${user.id}</p>
        <p>NAME: ${user.name}</p>
        <p>EMAIL: ${user.email}</p>
        <p>ADDRESS: ${user.address.street}</p>
      `
    } catch (e) {
      // # .innerHTML   : 태그가 포함된 문자열
      // # .textContent : 순수 문자열 
      userDataDiv.innerHTML = `<p>${e}</p>`
    }
  }
});