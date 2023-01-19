import { Link } from 'react-router-dom';
import s from "./Results.module.css";

interface IArticles {
    id: number;
    imageUrl: string;
    publishedAt: string;
    title: string;
    summary: string;
  }
  
  interface IProps {
    articles: IArticles[];
  };



const Results: React.FC<IProps> = (props) => {
   

  return (
    <ul className = {s.list}>
      {props.articles.map((article) => (
        <li key={article.id} className = {s.item}>
          <div className={s.card}>
            <img className={s.img} src={article.imageUrl} alt="poster"></img>
            <p className = {s.update}>{article.publishedAt}</p>
            <h3 className = {s.title}>{article.title}</h3>
            <p className = {s.text}>{article.summary}</p>
           <Link to={`/articles/${article.id}`} className = {s.link}>Read more</Link>
          </div>

          
        </li>
      ))}
    </ul>
  );
};

export default Results;
