import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {
  //? useParams 호출 시 URL변수들을 개겣로 반환
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>User ID: {params.id}</h1>
    </div>
  )
}

export default PostDetail