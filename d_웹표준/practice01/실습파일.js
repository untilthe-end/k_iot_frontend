document.addEventListener('DOMContentLoaded', () => {
  let secretNumber = Math.floor(Math.random() *101);

  console.log(secretNumber);

  let attempts = 0;

  const result = document.getElementById("result");
  const guessInput = document.getElementById("guessInput");
  const submitButton = document.getElementById("submitButton");
  const resetButton = document.getElementById("resetButton");

  // 추측 제출 버튼에 클릭 이벤트 리스너 추가, checkGuess 함수 호출
  submitButton.addEventListener('click', () => {
    // console.log(guessInput.value);
    checkGuess();
  });

  resetButton.addEventListener('click', () => {
    resetGame();
  });

  // 사용자의 추측을 확인하는 함수
  function checkGuess() {
    // 입력된 추측 값을 정수로 변환하여 guess 변수에 저장
    let guess = Number(guessInput.value);

    // 시도 횟수를 1 증가
    attempts++;
    console.log(attempts);

    // 사용자의 추측이 정답인 경우
      // `정답입니다. 시도 횟수: ${attempts}번`;
    if (guess === secretNumber) {
      result.innerHTML= `
      정답입니다. 시도 횟수: ${attempts}번
      `;
    }

    // 사용자의 추측이 정답보다 큰 경우
      // `입력값: ${guess} >> 높습니다. 낮춰주세요.`;
    if (guess > secretNumber) {
      result.innerHTML= `
      입력값: ${guess} >> 정답보다 높습니다. 낮춰주세요.
      `;
    }

    // 사용자의 추측이 정답보다 작은 경우
      // `입력값: ${guess} >> 낮습니다. 높여주세요.`;
    if (guess < secretNumber) {
      result.innerHTML= `
      입력값: ${guess} >> 정답보다 낮습니다. 높여주세요.
      `;
    }
    guessInput.value = "";
  }

  // 게임을 초기화하는 함수
  function resetGame() {

    // 새로운 랜덤 숫자를 secretNumber에 저장
    secretNumber = Math.floor(Math.random() *101);
    
    // 시도 횟수를 0으로 초기화
    attempts = 0;
    
    // 입력 필드를 비움
    guessInput.value = "";
    
    // 결과 표시를 초기화
    result.innerHTML = '';
  }
});