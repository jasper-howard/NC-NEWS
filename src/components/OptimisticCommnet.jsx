import React from "react";
import "../component css/List-Article.css";

import useDeleter from "../hooks/useDeleter";

const OptimisticComment = ({ comment_id, body, topic }) => {
  const { deleteStyle, isDeleted, handleDelete } = useDeleter(comment_id);
  return isDeleted ? null : (
    <>
      <div className={`Article-Div ${topic} ${deleteStyle}`}>
        <p className="Article-P">{body}</p>
        <p className="Article-P">User: YOU!</p>
        <p className="Article-P">Votes: 0</p>
        <button className={`${deleteStyle}`} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default OptimisticComment;
