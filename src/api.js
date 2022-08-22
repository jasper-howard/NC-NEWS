import axios from "axios";

const fetchAllArticles = () => {
  return axios
    .get(`https://nc-be-news.herokuapp.com/api/articles/`)
    .then((res) => {
      return res.data;
    });
};

export default fetchAllArticles;
