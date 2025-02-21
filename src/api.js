import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-9kug.onrender.com/api",
});

export const fetchArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchAllArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data;
  });
};

export const fetchArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const addVoteToArticle = (article_id, voteData) => {
  return newsApi.patch(`/articles/${article_id}`, voteData);
};

export const addCommentToArticle = ({ article_id }, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: "cooljmessy",
      body: comment,
    })
    .then((response) => {
      return response;
    });
};
