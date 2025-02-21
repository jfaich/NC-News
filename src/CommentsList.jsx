import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchArticleComments } from "./api";
import { useParams } from "react-router";
import PostComment from "./PostComment";

function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewComment, setIsNewComment] = useState(false);
  const { article_id } = useParams();
  useEffect(() => {
    fetchArticleComments(article_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
      setIsNewComment(false);
    });
  }, [isNewComment]);

  if (isLoading) {
    return <h2>Loading comments...</h2>;
  }

  return (
    <section>
      <PostComment
        setIsNewComment={setIsNewComment}
        isNewComment={isNewComment}
      />
      <h3>{commentsList.length} Comments...</h3>
      <ol className="comments-list">
        {commentsList.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ol>
    </section>
  );
}
export default CommentsList;
