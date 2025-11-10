import React, { useEffect, useState } from 'react'
import C_ArticleList from './C_ArticleList';
import C_ArticleDetail from './C_ArticleDetail';
import C_ArticleForm from './C_ArticleForm';
import { getAllArticles, type ArticleListResponse, type ArticleListResponseList } from '@/apis/articleApi';

function C_ArticlePage() {
  // 게시글 목록
  // 현재 사용자가 선택한 게시글의 ID (상태관리)
  // 로딩 여부 관리

  const [articles, setArticles] = useState<ArticleListResponseList>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await getAllArticles();
      console.log(data);
      setArticles(data);
    } catch (e) {
      console.error("게시글 목록 불러오기 실패: ",e);
    } finally {
      setLoading(false);
    }
  }

  //? 초기 목록 로드
  useEffect(()=> {
    fetchArticles();
  }, []);

  //# Event Handler
  // 새 게시글 추가 (ArticleForm 콜백)
  const handleArticleCreated = async(newArticle: ArticleListResponse) => {
    setArticles(prev => [newArticle, ...prev]); 
    // 새로 작성된게 맨 앞에 보이게, ...prev 그리고 원래있던거 보여주기.
  }

  return (
    <div style={{ display: 'flex', gap: '30px'}}>
      {/* Left */}
      <div style={{ width: "30%"}}>
        {loading ? (
          <p>로딩 중...</p>
          ) : (
            // articles= {props이다}
            <C_ArticleList articles={articles} onSelect={setSelectedId}/>
          )}
      </div>
      
      {/* Center */}
      <div style={{ width: "40%"}}>
        {selectedId ? (
          <C_ArticleDetail articleId={selectedId} />
        ) : (
          <p>게시글을 선택해 주세요.</p>
        )}
      </div>

      {/* Right */}
      <div style={{ width: "30%"}}>
        <C_ArticleForm onSuccess={handleArticleCreated} />
      </div>
    </div>
  )
}

export default C_ArticlePage