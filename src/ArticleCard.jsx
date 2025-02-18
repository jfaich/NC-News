function ArticleCard(article) {
  return (
    <ol key={article.article_id}>
      <img src={article.article.article_img_url} className="article-img"></img>
      <p className="article-title"> Title: {article.article.title}</p>
      <p>{article.article.topic}</p>
    </ol>
  );
}

export default ArticleCard;
