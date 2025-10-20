// app.js

//? 이름 붙여 가져오기 (Named Import)
import { TodoManager } from "./TodoManager.js";

// cf) 모듈을 가져올 경우 import문은 파일의 최상단에 작성 권장

// == 프로젝트 기능 정의 ==
// : TodoManager 모듈의 기능을 사용하여 할 일 앱 구현
// - 이벤트 등록, 할 일 목록 수정 등 로직을 담당

//? TodoManager의 인스턴스 생성
const todoManager = new TodoManager();

// 콘텐츠 로드 이벤트 실행
document.addEventListener("DOMContentLoaded", () => {
  //! HTML 요소 가져오기
  const form = document.querySelector("#new-todo-form");
  const input = document.querySelector("#new-todo");
  const todoList = document.querySelector("#todo-list");

  // # (e) 이벤트 객체 가져와서
  form.addEventListener("submit", (e) => {
    // type="submit" 버튼 클릭 시 이벤트 발생

    // form 요소에서 submit 이벤트 발생 시 '기본 제출 이벤트 방지'
    e.preventDefault();

    // form 내부 input의 데이터를 할 일 목록에 추가
    const text = input.value.trim();

    // 텍스트가 비워져있지 않다면
    if (text !== "") {
      todoManager.addTodo(text);
      input.value = ""; // input 창 초기화
      updateTodoList(); // 리스트 업데이트
      // # updateToList() 가 함수 안에서 여러번 호출되는 이유?
      // # 데이터가 바뀔 때마다 화면을 다시 그리기 위해서
    }
  });

  //! 할 일 목록 업데이트 함수
  // # updateTodoList()는 렌더 함수
  // & 화면에 보여질 내용을 그려주는 함수
  // & function updateTodoList() {
      // 화면 비우고
      // 최신 데이터 가져와서
      // 다시 <li> 들을 만들어서 붙임 
  // }

  function updateTodoList() {
    // 모든 항목 가져오기
    const todos = todoManager.getTodos();

    // ul 태그 내부의 데이터(내용) 삭제
    // HTML요소.innerHTML = '';
    // : 요소 내부의 전체 HTML 코드를 문자열로 반환
    todoList.innerHTML = "";
    // # innerHTML은 요소 안의 HTML 내용을 나타내는 속성
    /*<ul id ="todo-list">
      <li>빨래하기</li>
      <li>공부하기</li>
      </ul>

      <ul id="todo-list"></ul> // * << 옆에 처럼 비워주는것 .innerHTML = '';
      // # 다음에 렌더링할 새 목록을 위해 초기화 하는 작업
    */

    // # 할 일 목록 하나씩 꺼내서
    todos.forEach( todo => {
      // 태그에 사용될 텍스트 전달
      // # 화면에 붙일 새로운 <li> 태그 만들기 (아직 화면에는 안 붙고, 메모리 속에만 있음)
      const li = document.createElement("li");
      // # 방금 만든 <li> 안에 할 일 내용(text)을 넣음.
      li.textContent = todo.text;

      // 순회되는 요소의 완료 여부에 따라 completed 클래스 사용
      // # 완료 상태에 따라 class = "completed"를 붙임. 
      if (todo.completed) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }

      li.addEventListener("click", () => {
        todoManager.toggleCompleted(todo.id);
        updateTodoList();
        // # toggleComplete가 데이터를 바꾸면, 그 변경사항을 UI에 반영하려고 호출
      });

      // 삭제 버튼 생성
      const deleteButton = document.createElement("button"); // <button> 요소를 만드는것 (메모리에만 저장)
      deleteButton.textContent = "삭제"; // <button>삭제</button> 삭제를 넣는것
      deleteButton.classList.add("delete-button"); // <button 에 class="delete-button"> 클래스 이름 추가

      deleteButton.addEventListener("click", (e) => {
        // # stopPropagation(); 부모(li) 클릭 이벤트 방지
        // & click 이벤트가 '삭제' 버튼과 'list 클릭' 두곳이 있는데, 
        // 삭제 버튼만 작동하게 하려면 stopPropagation 해야함. 
        // 이벤트는 기본적으로 자식 -> 부모로 전달됨. ("이벤트 버블링") 을 막아줌.
        e.stopPropagation(); 
        todoManager.removeTodo(todo.id); // '삭제'한 li만 빼고 남은 배열들.
        updateTodoList();
        // # 데이터에서 지웠으니 화면도 다시 그림
      });

      // ul >> li >> button
      // # li 안에 deleteButton을 자식 요소로 추가 한다.
      // & <li>  <button class="delete-button">삭제</button> </li>
      li.appendChild(deleteButton);
      // #<ul id="todo-list"> 아래에 li를 붙인다.
      todoList.appendChild(li);
    });
  }

  // 초기 목록 렌더링
  // # 페이지가 처음 로드될 때, todoManager에 있는 현재 데이터로 목록 그리기
  updateTodoList();
});


//# 할 일 목록 업데이트 할때는
//# 먼저 화면을 싹 비우고
//# todos 배열을 기준으로 새로운 <li>들을 다시 그리는 방식을 씀.
