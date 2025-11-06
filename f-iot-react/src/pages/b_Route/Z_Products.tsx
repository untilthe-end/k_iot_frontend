import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import './Z_Product.css';

//! 상품 관련 Route 실습 예제

//? 프로젝트 구조
// 1) Products: 상품 리스트 + 쿼리 필터 + state 전달
// 2) ProductDetail: useParams로 상세 조회
// 3) ProductInfo: 중첩 라우트 (상세 정보)
// 4) ProductReviews: 중첩 라우트 (리뷰)
// 5) Dashboard: useNavigate, Outlet

//? 상품 데이터 (mock 데이터)
// [] 배열안에 {} 객체
const PRODUCTS = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Headphones", category: "electronics" },
  { id: 3, name: "Shirt", category: "fashion" },
  { id: 4, name: "Pants", category: "fashion" },
  { id: 5, name: "Shoes", category: "fashion" },
];

//? useParams()       : URL 경로에서 파라미터를 가져오는 Hook (경로 변수)
//  EX) http:// localhost:5173/products/1/info - '1'의 값 (:으로 명시)
//? useNavigate()     : 페이지 이동을 담당하는 Hook
//? useLocation()     : 현재 위치 객체를 반환하는 Hook

//? useSearchParams() : URL의 쿼리 스트링을 읽고 조작할 수 있는 Hook
//  EX) http://localhost:5173/products?category=fashion&name=Shoes
//  - category=fashion
//  - name=Shoes
//   : 위의 두 값이 Search Params (검색 매개변수)

//* useSearchParams() 사용 방법
// 1. [현재 쿼리, 쿼리 변경 함수] 반환 - useState와 동일
//    const [searchParams, setSearchParams] = useSearchParams();
// 2. 쿼리 파라미터(검색 매개변수) 읽어오기
//    const category = searchParams.get("category");
//    const name = searchParams.get("name");

// +) 쿼리 변경 방법
//    setSearchParams({ category: '', name: ''});

function Z_Products() {

  const location = useLocation(); 
  // 현재 페이지의 URL 정보 전체를 담은 객체 가져오기

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  // /products?category=fruit 이면 
  // category 변수에는 fruit이 들어감

  // category가 존재한다면 PRODUCTS 배열에서 product.category가 "fruit"인 항목들만 골라냄.
  //           없으면 (/products) 모든 상품을 그대로 보여줌.
  const filtered = category
    ? PRODUCTS.filter((product) => product.category === category)
    : PRODUCTS;

//# /products 전체제품 목록에서 시작
// & 1. 버튼 클릭 
// setSearchParams({ category: "electronics" }) 실행
// & 2. URL 변경 
// /products?category=electronics
// & 3. 컴포넌트 재렌더링
// 최신 URL 기반으로 useSerachParams() 다시 읽음 
// & 4. searchParams.get("category") 실행
// "electornics"반환
// & 5. 필터링 된 상품 렌더링
// 전자제품만 표시됨

  return (
    <div className="product-container">
      <h2> Product List</h2>
      <div className="filter-buttons">
        <button onClick={() => setSearchParams({ category: "electronics" })}>
          전자제품
        </button>
        <button onClick={() => setSearchParams({ category: "fashion" })}>
          패션
        </button>
        <button onClick={() => setSearchParams({})}>전체보기</button>
      </div>
      <ul className="product-list">
        {filtered.map((product) => (
          <li key={product.id}>
            {/* state를 사용하여 location 상태 전달 */}
            <Link
              to={`/products/${product.id}`}
              state={{ from: location.pathname + location.search }}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Z_Products;

// # <li key={product.id} 
// & 리스트 렌더링 시 각 항목을 구분하기 위해
// * 고유한 key
// & product.id는 상품의 고유번호이므로 
// * key 로 적하다. (PK)