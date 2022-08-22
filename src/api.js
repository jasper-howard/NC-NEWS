import axios from "axios";

const fetchAllArticles = (category) => {
  if (category === "all") {
    return axios
      .get(`https://nc-be-news.herokuapp.com/api/articles`)
      .then((res) => {
        return res.data;
      });
  } else
    return axios
      .get(`https://nc-be-news.herokuapp.com/api/articles?topic=${category}`)
      .then((res) => {
        return res.data;
      });
};

export default fetchAllArticles;
