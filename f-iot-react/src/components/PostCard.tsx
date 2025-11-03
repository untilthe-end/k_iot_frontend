import type { Post } from "@/types/post";
import React from "react";
import { Link } from "react-router-dom";

//! PostCardProps 타입 정의
interface PostCardProps {
  post: Post;
}

//! PostCard 컴포넌트 // post라는 이름으로 쓸수있음.
function PostCard({ post }: PostCardProps) {
  //? 이벤트 핸들러 정의
  const handleLikeClick = () => {
    // 부모에서 받은 post로 ..
    console.log(`좋아요 클릭됨: ${post.id}`);
  };

  return (
    <div>
      {/* 4-1. 제목 길이 조건부: 제목이 30자 초과일 경우 "(긴 제목)" 표시를 추가한다. (삼항연산자 사용) */}
      <h3>{post.title.length > 30 ? post.title + " (긴 제목)" : post.title}</h3>
      // {/* 본문 */}
      <p>{post.body}</p>
      // {/* 4-2. userId가 1인 경우에만 표시 */}
      {post.userId === 1 && <small>⭐ 특별 회원의 글</small>}
      // {/* 5. 버튼 클릭 시 이벤트 핸들러 연결 */}
      <div>
        <button onClick={handleLikeClick}>좋아요</button>
      <Link to={`/practice/post/${post.id}`}>자세히 보기</Link>
      {/* a태그는 href 속성 필요! Link는 to 속성 필요! */}
      </div>
    </div>
  );
}

export default PostCard;
