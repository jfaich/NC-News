import { useParams } from "react-router";
import { addCommentToArticle } from "./api";
import { useState } from "react";

function PostComment({ setIsNewComment, IsNewComment }) {
  const [commentText, setCommentText] = useState("");
  const [commentPostingInProgress, setCommentPostingInProgress] =
    useState(false);
  const [commentPostedSuccessfully, setCommentPostedSuccessfully] =
    useState(false);
  const { article_id } = useParams();
  const commentHandler = (e) => {
    e.preventDefault();
  };
  const handleComment = () => {
    setCommentPostedSuccessfully(false);
    addCommentToArticle({ article_id }, commentText).then((response) => {
      setCommentText("");
      setCommentPostingInProgress(true);
      if (response.status === 201) {
        setCommentPostedSuccessfully(true);
        setCommentPostingInProgress(false);
        setIsNewComment(true);
      }
    });
  };
  return (
    <div>
      <p>Add a comment to this article</p>
      <form onSubmit={commentHandler}>
        {commentPostedSuccessfully ? <p>Comment posted!</p> : null}
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></input>
        <button type="submit" onClick={handleComment}>
          {commentPostingInProgress ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}

export default PostComment;
