import { useEffect, useState } from "react";
import { addVoteToArticle } from "./api";
import { useParams } from "react-router";

function IncreaseVotesCard({ chosenArticle }) {
  const { article_id } = useParams();
  const [votesCount, setVotesCount] = useState();
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setVotesCount(chosenArticle.votes);
  }, [chosenArticle]);

  const handleVote = () => {
    setVotesCount((votesCount) => votesCount + 1);
    setError(null);
    setHasVoted(true);
    addVoteToArticle(article_id, {
      inc_votes: 1,
    }).catch((err) => {
      setVotesCount((votesCount) => votesCount - 1);
      setHasVoted(false);
      setError("Your vote wasn't registered, please try again.");
    });
  };
  const handleRemoveVote = () => {
    setVotesCount((votesCount) => votesCount - 1);
    addVoteToArticle(article_id, {
      inc_votes: -1,
    });
  };
  if (!hasVoted) {
    return (
      <div className="votes-card">
        {error ? <p>{error}</p> : null}
        <button onClick={handleVote}>Upvote</button>
        <p>Current votes: {votesCount}</p>
      </div>
    );
  } else
    return (
      <div className="votes-card-two">
        <p>Vote submitted!</p>
        <p>Current votes: {votesCount}</p>
        <button onClick={handleRemoveVote}>Remove vote</button>
      </div>
    );
}
export default IncreaseVotesCard;
