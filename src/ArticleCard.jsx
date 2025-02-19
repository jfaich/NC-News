import { Link } from "react-router";
function ArticleCard({ article }) {
  return (
    <div>
      <Link to={`/article/${article.article.article_id}`}>
        <ol key={article.article_id} className="article-card">
          <p className="topic-home">#{article.article.topic}</p>
          <img
            src={article.article.article_img_url}
            className="article-img"
          ></img>
          <p className="article-title"> {article.article.title}</p>
          <div></div>
        </ol>
      </Link>
    </div>
  );
}

export default ArticleCard;
