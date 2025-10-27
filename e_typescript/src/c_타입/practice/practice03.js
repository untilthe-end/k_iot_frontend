document.addEventListener('DOMContentLoaded', function () {
    // 1) DOM 요소 타입 단언
    var input = document.getElementById('username');
    var button = document.getElementById('saveButton');
    var resultDiv = document.getElementById('result');
    // 2) 버튼 클릭 시 동작
    button.addEventListener('click', function () {
        var username = input.value.trimEnd();
        if (!username) {
            resultDiv.innerText = '이름을 입력해주세요.';
            return;
        }
        // 3) JSON 문자열 생성
        var jsonData = JSON.stringify({ name: username, age: 30 });
        var user = JSON.parse(jsonData);
        // 5) DOM 반영
        resultDiv.innerText = "".concat(user.name, " (").concat(user.age, "\uC138)\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4!");
    });
});
//! == innerHTML VS innerText VS textContent ==
document.addEventListener('DOMContentLoaded', function () {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var element = document.getElementById('myDiv');
    if (element) {
        a === null || a === void 0 ? void 0 : a.addEventListener('click', function () {
            alert(element.innerHTML); // DIV 안에 있는 HTML 전체 내용 반환
        });
        b === null || b === void 0 ? void 0 : b.addEventListener('click', function () {
            alert(element.innerText); // Element 내에서 사용자에게 보여지는 텍스트 값을 반환
        });
        c === null || c === void 0 ? void 0 : c.addEventListener('click', function () {
            alert(element.textContent); // 태그와 상관없이 해당 요소가 가지는 텍스트 내용값을 그대로 반환
        });
    }
});
