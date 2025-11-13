import React from "react";

/*
# 복습 문제 (1)

문제) 할 일 대시보드

- 여러 컴포넌트로 나누기 (부모 -> 자식으로 Props 전달)
- 조건부 렌더링 (삼항 연산자, &&)
- 배열 렌더링 + key 
*/

//% 타입 정의? 라는 뜻은 {} 중괄호 안에 key:type 형태
// === 요구 사항 ===
//@ 1. Todo 타입 정의 (interface Todo)
//@ 2. TodoItem 컴포넌트 Props 타입 정의 (interface TodoItemProps)
//@ 3. TodoItem 컴포넌트 생성
// 반환
// - div 내에서 done이 true면 텍스트 앞에 👉 첨부, 아니면 그냥 출력     >> p 태그

//@ 4. TodoBoard 컴포넌트 Props 타입 정의 (interface TodoBoardProps - todos: Todo[])

//@ 4. TodoBoard 컴포넌트 생성
//
// 반환
// - todos.length(배열의 길이)
//   > 0 일 경우 '할 일이 없습니다.' 출력       >> p 태그
//   > 0 이 아닐 경우
//     (1) 완료: 완료된 할 일 개수(done: true) / 전체: 전체 할 일 수
//         EX) 완료: 3 / 전체: 5
//     (2) 배열 렌더링
//         div 내에서 done이 true면 텍스트 앞에 👉 첨부, 아니면 그냥 출력 //^ <TodoItem /> 컴포넌트 사용 (+ key / props)

//% const TodoItem 도 컴포넌트 생성
//% function Example02() 도 컴포넌트

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>{todo.done ? <p>{"👉" + todo.text}</p> : <p>{todo.text}</p>}</div>
  );
};

interface TodoBoardProps {
  todos: Todo[];
}

// # todos.filter((todo)=> todo.done === true ).length; 와 같음
// # 왜냐면 filter는 참인것 만 가져와라 ~ 하는것이기 때문임.
const TodoBoard: React.FC<TodoBoardProps> = ({ todos }) => {
  const total = todos.length;
  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <div>
      {total === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        <>
          <p>
            완료: {doneCount} / 전체: {total}
          </p>
          {/* 반환되는 요소가 1줄이면 ()소괄호 생략 가능 / 여러 줄 생략 불가 */}
          {/* if 뒤에 return 시에 { system.out.println(하나 이면 중괄호 생략같은거)} */}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </>

        // <p>완료: 1 / 전체: 3</p>
        // <div>{todo.done ? <p>{"👉" + todo.text}</p> : <p>{todo.text}</p>}</div>
      )}
    </div>
  );
};
//% 부모가 없다 =부모가 여러명이다 . 묶어주자

//@ Example02 컴포넌트 (데이터 정의 및 전달)
const Example02: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, text: "React 문법 복습", done: true },
    { id: 2, text: "Props 이해하기", done: false },
    { id: 3, text: "조건부 렌더링 연습하기", done: false }
  ]

  return (
    <div
      style={{ marginTop: "10px", padding: "20px", border: "1px dashed black" }}
    >
      {/* == TodoBoard 사용 (props 전달) == */}
      <TodoBoard todos={todos}/>
    </div>
  );
}
export default Example02;

// const Example02: React.FC = () => {
//    return <div>Hello</div>;
// };

// & <TodoBoard todos={todos}/>
// * HTML 태그처럼 보이지만, TodoBoard라는 리액트 컴포넌트 실행하는 문법
// # TodoBoard() 호출하는 것과 같은 의미
// # TodoBoard({ todos: todos })