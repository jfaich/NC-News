import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
const BaseURL = "https://news-api-9kug.onrender.com";
import { Link } from "react-router";
import { fetchAllArticles } from "./api";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((response) => {
      setArticlesList(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading articles...</h2>;
  }
  return (
    <section>
      <div>
        <p>Showing All Articles ({articlesList.length} available)</p>
        <ol className="articles-list">
          {articlesList.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                className="article-card"
                article={{ article }}
              ></ArticleCard>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Articles;
