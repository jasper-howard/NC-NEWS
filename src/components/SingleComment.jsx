import "../component css/List-Article.css";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import useImageGen from "../hooks/useImageGen";
import useDeleter from "../hooks/useDeleter";
import { LinearProgress } from "@mui/material";

const SingleComment = ({ comment, topic }) => {
  const {
    user: { user },
  } = useContext(UserContext);

  const { deleteStyle, isDeleted, handleDelete } = useDeleter(
    comment.comment_id
  );
  const { imageWait, url, handleImgGen } = useImageGen(comment.body);

  return isDeleted ? null : (
    <>
      <div className={`Article-Div-List ${topic} ${deleteStyle}`}>
        <p className="Article-P">
          User: {comment.author === user.username ? "YOU!" : comment.author}
        </p>
        <p className="Article-P">{comment.body}</p>
        {/* <p>{imageWait}</p> */}
        <img src={url} alt="" />
        {imageWait === "plz wait" ? (
          <LinearProgress
            sx={{
              width: "90%",
            }}
          />
        ) : null}
        <section className="Button-Section">
          <button className={` ${topic}-s `} onClick={handleImgGen}>
            get image from ai
          </button>
          {comment.author === user.username ? (
            <button className={`${topic}-s `} onClick={handleDelete}>
              Delete
            </button>
          ) : null}
        </section>
      </div>
    </>
  );
};

export default SingleComment;
