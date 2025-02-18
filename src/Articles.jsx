import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
const BaseURL = "https://news-api-9kug.onrender.com";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    axios.get(`${BaseURL}/api/articles`).then((response) => {
      setArticlesList(response.data);
    });
  }, []);
  return (
    <section>
      <div>
        <p>Showing All Articles ({articlesList.length} available)</p>
        <ol>
          {articlesList.map((article) => {
            return <ArticleCard article={article}></ArticleCard>;
          })}
        </ol>
      </div>
    </section>
  );
}

export default Articles;
