import { useState, useEffect } from "react";
import { getArticles } from "../../api/api";
import { findArticle } from "../../api/api";
import Results from "../../components/Results/Results";
import s from "./HomePage.module.css";

const Homepage = () => {
  type Articles = {
    title: string;
    publishedAt: string;
    summary: string;
    imageUrl: string;
    id: number;
  };

  const [value, setValue] = useState<any>(null);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      filter: { value: string };
    };
    setValue(target.filter.value);
    if (value) {
      findArticle(value)
        .then((data) => {
          setArticles(data.data);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }

  return (
    <div className={s.container}>
      <h2 className={s.text}>Filter by keywords</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="filter" className={s.input} />
      </form>
      {articles ? (
        <div>
          <p className={s.results}>Results: {articles.length}</p>
          <Results articles={articles}></Results>
        </div>
      ) : (
        <p className={s.text}>We did not find any articles! Try again later!</p>
      )}
      {error && (
        <p className={s.text}>Something is going wrong! Try again later!</p>
      )}
    </div>
  );
};

export default Homepage;
