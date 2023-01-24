import { Link } from "react-router-dom";
import s from "./Results.module.scss";
import Card from "@mui/material/Card";
import Highlighter from "react-highlight-words";

interface IArticles {
  id: number;
  imageUrl: string;
  publishedAt: string;
  title: string;
  summary: string;
}

interface IProps {
  articles: IArticles[];
  keyword: any;
}

const Results: React.FC<IProps> = (props) => {
    function dateHandler (dtr : string) {
        const final = new Date(dtr);
        return final.toDateString()
    }

  return (
    <ul className={s.list}>
      {props.articles.map((article) => (
        <li key={article.id} className={s.item}>
          <Card variant="outlined" className={s.card}>
            <img className={s.img} src={article.imageUrl} alt="poster"></img>
            <p className={s.update}>{ dateHandler(article.publishedAt)}</p>
            {typeof props.keyword === "object" ? (
              <p className={s.title}>{article.title}</p>
            ) : (
              <Highlighter
                searchWords={[props.keyword]}
                textToHighlight={article.title}
                autoEscape={true}
                className={s.title}
              ></Highlighter>
            )}
            {typeof props.keyword === "object" ? (
              <p className={s.text}>{article.summary}</p>
            ) : (
              <Highlighter
                searchWords={[props.keyword]}
                textToHighlight={article.summary}
                autoEscape={true}
                className={s.text}
              ></Highlighter>
            )}
           
            <button className={s.button}>
              <Link to={`/articles/${article.id}`} className={s.link}>
                Read more
              </Link>
            </button>
         
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Results;
