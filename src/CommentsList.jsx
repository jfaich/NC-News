import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchArticleComments } from "./api";
import { useParams } from "react-router";

function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    fetchArticleComments(article_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading comments...</h2>;
  }

  return (
    <section>
      <h3>Comments...</h3>
      <ol className="comments-list">
        {commentsList.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ol>
    </section>
  );
}
export default CommentsList;
