import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
const BaseURL = "https://news-api-9kug.onrender.com";
import { Link } from "react-router";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BaseURL}/api/articles`).then((response) => {
      setArticlesList(response.data);
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
              <Link to="/article/">
                <ArticleCard
                  className="article-card"
                  article={{ article }}
                ></ArticleCard>
              </Link>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Articles;
