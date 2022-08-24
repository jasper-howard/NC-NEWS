import { useState } from "react";
import { deleteComment } from "../api";

const useDeleter = (comment_id) => {
  const [deleteStyle, setDeleteStyle] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    deleteComment(comment_id);
    setDeleteStyle("Pre_del");
    setTimeout(() => {
      setIsDeleted(true);
    }, 500);
  };
  return { deleteStyle, isDeleted, handleDelete };
};

export default useDeleter;
