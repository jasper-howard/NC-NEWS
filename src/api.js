import axios from "axios";

const fetchAllArticles = (topic, sort_by, order) => {
  return axios
    .get(`https://nc-be-news.herokuapp.com/api/articles`, {
      params: { topic: topic, sort_by: sort_by, order: order },
    })
    .then((res) => {
      return res.data;
    });
};

const fetchArticle = (article_id) => {
  return axios
    .get(`https://nc-be-news.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data;
    });
};

const updateVotes = (article_id) => {
  return axios
    .patch(`https://nc-be-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchComments = (article_id) => {
  return axios
    .get(`https://nc-be-news.herokuapp.com/api/articles/${article_id}/comments`)
    .then((res) => {
      return res.data;
    });
};

const postComment = ({ article_id, username, body }) => {
  return axios.post(
    `https://nc-be-news.herokuapp.com/api/articles/${article_id}/comments`,
    {
      username: username,
      body: body,
    }
  );
};
const deleteComment = (comment_id) => {
  return axios
    .delete(`https://nc-be-news.herokuapp.com/api/comments/${comment_id}`)
    .then((res) => res.data);
};
export {
  fetchAllArticles,
  fetchArticle,
  updateVotes,
  fetchComments,
  postComment,
  deleteComment,
};
