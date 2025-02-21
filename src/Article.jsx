import axios from "axios";
import { react, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticle, fetchArticleComments } from "./api";
import CommentsList from "./CommentsList";
import IncreaseVotesCard from "./IncreaseVotesCard";
import PostComment from "./PostComment";

function Article() {
  const [chosenArticle, setChosenArticle] = useState({});

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticle(article_id).then((response) => {
      setChosenArticle(response);
    });
  }, [article_id]);
  return (
    <div>
      <article>
        <img
          src={chosenArticle.article_img_url}
          className="article-header-img"
        ></img>
        <h2 className="article-title">{chosenArticle.title}</h2>
        <p className="topic-text">
          <em>#{chosenArticle.topic}</em>
        </p>
        <p className="author-text">Author: {chosenArticle.author}</p>
        <IncreaseVotesCard
          chosenArticle={chosenArticle}
          className="votes-card"
        />
        <p className="text-body">{chosenArticle.body}</p>
      </article>

      <CommentsList />
    </div>
  );
}

export default Article;
