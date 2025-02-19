import axios from "axios";
import { react, useEffect, useState } from "react";
import { useParams } from "react-router";

const BaseURL = "https://news-api-9kug.onrender.com";
function Article() {
  const [chosenArticle, setChosenArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    axios.get(`${BaseURL}/api/articles/${article_id}`).then((response) => {
      const newArticle = response.data.article;
      setChosenArticle(newArticle);
    });
  }, [article_id]);
  return (
    <div>
      <img
        src={chosenArticle.article_img_url}
        className="article-header-img"
      ></img>
      <h2 className="article-title">{chosenArticle.title}</h2>
      <p className="topic-text">
        <em>#{chosenArticle.topic}</em>
      </p>
      <p className="author-text">Author: {chosenArticle.author}</p>

      <p className="text-body">{chosenArticle.body}</p>
    </div>
  );
}

export default Article;
