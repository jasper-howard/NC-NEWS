import React from "react";
import "../component css/List-Article.css";
import useImageGen from "../hooks/useImageGen";
import useDeleter from "../hooks/useDeleter";
import { LinearProgress } from "@mui/material";

const OptimisticComment = ({ comment_id, body, topic }) => {
  const { imageWait, url, handleImgGen } = useImageGen(body);

  const { deleteStyle, isDeleted, handleDelete } = useDeleter(comment_id);
  return isDeleted ? null : (
    <>
      <div className={`Article-Div-List ${topic} ${deleteStyle}`}>
        <p className="Article-P">User: YOU!</p>
        <p className="Article-P">{body}</p>
        <p className="Article-P">{imageWait}</p>
        <img src={url} />
        <br />
        {imageWait === "plz wait" ? (
          <LinearProgress
            sx={{
              width: "90%",
            }}
          />
        ) : null}
        <section className="Button-Section">
          <button className={`${topic}-s `} onClick={handleImgGen}>
            get comment from ai
          </button>
          <button
            className={`${deleteStyle} ${topic}-s`}
            onClick={handleDelete}
          >
            Delete
          </button>
        </section>
      </div>
    </>
  );
};

export default OptimisticComment;
