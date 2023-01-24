import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net",
});

export const getArticles = () => api.get("/v3/articles?_limit=5");

export const findArticle1 = (searchItem: string) =>
  api.get(
    `/v3/articles?title_contains=${searchItem}`
  );
  export const findArticle2 = (searchItem: string) =>
  api.get(
    `/v3/articles?summary_contains=${searchItem}`
  );
  
export const getArticleById = (articleId: number) =>
  api.get(`/v3/articles/${articleId}`);
