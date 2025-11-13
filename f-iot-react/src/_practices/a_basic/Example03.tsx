import React from 'react'

//! 고객 주문 카드 컴포넌트 (OrderCard)

//? 학습 포인트
// - 조건부 렌더링 (삼항 연산자, 논리연산자 - 단락 평가)
// - 기본값 처리 (undefined props)
// - UI 구성 순서 

//? 시나리오
// : 음식점 관리자 페이지에서, 주문 리스트를 카드 형태로 보여주고 싶습니다.
//   각 주문에는 고객 이름, 총 주문 금액, 결제 여부가 표시됩니다.

//? 요구사항
//& 1. customerName이 전달되지 않으면 "비회원 고객"으로 표시합니다.
//& 2. isPaid(결제 여부)가 true면 "결제 완료", 그렇지 않으면 "결제 대기중"을 표시합니다.
//& 3. totalPrice가 0이면 가격 영역은 표시하지 않습니다.
//& 4. 전체를 <div>로 감싸고, <p> 태그로 항목을 구분합니다.

//? Props 정의
// customerName - string(선택적 프로퍼티) : 고객 이름 (없을 수 있음)
// totalPrice   - number                : 주문 총액
// isPaid       - boolean               : 결제 완료 여부

//? 코드 작성 순서
// 1. OrderCardProps 타입 정의
type OrderCardProps = {
  customerName?: string;
  totalPrice: number;
  isPaid: boolean;
}



// 2. OrderCard 함수형 컴포넌트 정의
// 3. 구조 분해 할당으로 props 받기
// 4. JSX에서 삼항연산자와 단락 평가를 활용한 렌더링 제어
// 5. 적절한 <p> 태그 출력

// & 자식 컴포넌트 (전달받은 props를 화면에 표시)
function OrderCard({ customerName, totalPrice, isPaid}: OrderCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '240px' }}>
      {/* 고객 이름이 없을 때 비회원 처리 */}
      <p>주문자: {customerName ? customerName : '비회원 고객'}</p>
      <p>주문자: </p>

      {/* totalPrice가 0이 아닐 때만 표시 (단락 평가) */}
      {totalPrice > 0 && (<p>총액: {totalPrice.toLocaleString()}원</p>)}

      {/* 결제 상태: 삼항 연산자 */}
      <p>결제 상태: {isPaid ? '결제완료' : '결제 대기중'}</p>
    </div>
  )
}

// & 부모 컴포넌트 (데이터 생성하고 자식에게 전달)
function Example03() {
  
  return(
    <div style={{ display: 'flex', gap: '16px' }}>
      
        <OrderCard customerName="이승아" totalPrice={18000} isPaid={true} />
        <OrderCard totalPrice={0} isPaid={false} />
     
    </div>
  )
}

/*
# == 예시 출력 == #
(1)
주문자: 이승아
총액: 18,000원
상태: 결제 완료
-------------------
(2)
주문자: 비회원 고객
상태: 결제 대기중
*/
export default Example03

// .toLocaleString()은 숫자를 "사람이 읽기 좋게 지역 형식에 맞춰 표시"
// 총액: 18,000원