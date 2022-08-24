import "../component css/List-Article.css";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

import useDeleter from "../hooks/useDeleter";

const SingleComment = ({ comment, topic }) => {
  const {
    user: { user },
  } = useContext(UserContext);

  const { deleteStyle, isDeleted, handleDelete } = useDeleter(
    comment.comment_id
  );

  return isDeleted ? null : (
    <>
      <div className={`Article-Div ${topic} ${deleteStyle}`}>
        <h2 className="Article-H2">{comment.title}</h2>
        <p className="Article-P">{comment.body}</p>
        <p className="Article-P">
          User: {comment.author === user.username ? "YOU!" : comment.author}
        </p>
        <p className="Article-P">Votes: {comment.votes}</p>
        {comment.author === user.username ? (
          <button onClick={handleDelete}>Delete</button>
        ) : null}
      </div>
    </>
  );
};

export default SingleComment;
