function CommentCard({ comment }) {
  return (
    <li className="comment-card">
      <p>Written by: {comment.author}</p>
      <p>{comment.body}</p>

      <p>{comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
}

export default CommentCard;
