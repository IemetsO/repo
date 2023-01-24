import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../../api/api";
import s from "./ArticlePage.module.scss";

type Article = {
  title: string;
  imageUrl: string;
  id: number;
};

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<string>();
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const idOfArticle = Number(articleId);

  useEffect(() => {
    getArticleById(idOfArticle)
      .then((data) => setArticle(data.data))
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }, [articleId, error, idOfArticle]);

  if (error) {
    return <p>Oop! Something went wrong!</p>;
  }

  return (
    <div className={s.container}>
      {article && (
        <div>
          <div>
            <img className={s.img} src={article.imageUrl} alt="poster"></img>
          </div>
          <div className={s.inner}>
            <h3 className={s.title}>{article.title}</h3>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              corporis laboriosam? Doloremque dolorum, tempora beatae quod aut
              corporis? Consequatur aliquam hic, ab esse deserunt repellat
              impedit magni. Nulla, eveniet ducimus earum perspiciatis optio
              eius aspernatur unde reiciendis animi itaque facere iste
              doloremque autem a labore, libero praesentium repellendus
              consequuntur voluptatibus! Quisquam aliquid ab suscipit deserunt
              consectetur nihil dignissimos ullam non eligendi repudiandae,
              provident, temporibus nobis debitis consequuntur tenetur eius id.
              Quisquam veniam exercitationem laboriosam dolorem labore iste
              temporibus nobis, eligendi cupiditate dignissimos laudantium dolor
              molestias ad sequi deleniti obcaecati repellat commodi eaque
              tenetur sapiente qui perspiciatis natus adipisci facilis? Dolorum
              suscipit iure id nulla officiis beatae commodi dolorem nemo
              voluptates odio fuga laudantium deserunt est mollitia praesentium
              quisquam unde aut nesciunt deleniti architecto quas minima
              inventore, delectus dolore? Dolore, necessitatibus temporibus
              mollitia ducimus, quis quas odio reprehenderit quidem sed, facilis
              itaque dolor illum. Accusantium, velit? Neque tempora blanditiis
              iste eum quos voluptatem suscipit labore provident, quam aperiam
              veniam voluptas nobis! Pariatur dicta unde nostrum tempora,
              commodi cupiditate porro maiores corporis, iusto explicabo
              possimus cum aliquid eum quidem, vitae ullam alias obcaecati iure
              soluta? Doloribus corporis mollitia cum laboriosam autem sint
              aspernatur repellat aut esse inventore quae dolorum fugiat,
              repudiandae assumenda accusantium eum ipsa nihil, natus similique
              voluptatem. Delectus officiis rerum optio natus unde tenetur, illo
              ipsa dignissimos maxime ipsum, ex consequatur facere sunt possimus
              sint quas asperiores expedita quidem? Cum deleniti, quidem,
              obcaecati asperiores illum molestias voluptatum maxime doloribus
              provident explicabo harum quaerat possimus sed non id, assumenda
              delectus eos commodi quibusdam ipsum magni quasi. Obcaecati aut
              repellendus voluptatum quos necessitatibus voluptate eveniet, vero
              laudantium aliquam sint nemo fuga id quae provident animi. Alias
              et eveniet nesciunt, enim vero animi vel. Quaerat, veritatis
              deleniti! Enim ducimus ipsam suscipit! Voluptatibus maxime eum
              voluptatum est laborum vero ab provident possimus architecto
              eligendi sunt rem itaque magnam, molestiae aut commodi repellat
              quos, ducimus delectus excepturi ex modi ipsum culpa. Sint veniam
              minima velit sed quaerat vitae provident neque quasi minus
              recusandae earum eos, nihil ducimus repellendus blanditiis
              reiciendis voluptas nesciunt. Recusandae ipsa cupiditate
              repudiandae temporibus vel tempore eum deleniti nemo placeat eaque
              harum, ex molestiae minus iusto tempora, nam rem, praesentium
              optio aliquam mollitia asperiores illum voluptas suscipit. Alias
              aut, esse sapiente corporis illum quisquam impedit sint cumque
              excepturi quaerat minima maiores perspiciatis quas dicta nisi?
              Commodi fugiat illo cum vero magnam quam qui sed saepe omnis
              explicabo nulla rerum exercitationem expedita sint accusantium
              nesciunt accusamus, sapiente dicta dolor asperiores suscipit
              pariatur. Ducimus asperiores ut nesciunt repudiandae rerum iusto
              doloremque quo, cumque, veritatis deleniti fugiat ipsa! Soluta
              nostrum porro aperiam praesentium labore recusandae earum
              laboriosam. Nobis voluptates, culpa recusandae earum provident
              itaque repudiandae dolorum iusto voluptatibus eius hic labore
              deserunt quasi aut nesciunt tempora iste blanditiis cum ut, nihil
              fuga. Similique maiores excepturi, velit ab est culpa aliquam,
              obcaecati assumenda laborum facilis officiis dolor earum quaerat
              esse fugit asperiores nemo sunt, libero necessitatibus laboriosam
              impedit ex optio. Inventore saepe facilis reiciendis est numquam
              ullam libero nihil corporis reprehenderit dolor itaque eligendi,
              alias nostrum, accusantium accusamus? Quidem officiis eaque ipsam
              ad, placeat corporis dolores! Magnam labore incidunt alias
              excepturi! Esse aperiam fugiat similique quaerat eveniet rerum vel
              molestias voluptatum ipsam quod eligendi dolorem iste omnis,
              laborum ea ut debitis. Ipsa est nemo quod, in, vel quibusdam
              maiores optio laudantium accusamus vero quae consequuntur porro
              dignissimos iusto, minus illum rem nam adipisci at sunt. Non
              laboriosam repudiandae cumque optio animi veritatis reprehenderit,
              vitae maiores quaerat. Quisquam iure officia, minus soluta ratione
              deleniti facere ex quia dolorum quasi molestias libero fugiat, sit
              nisi mollitia expedita? Sequi adipisci pariatur animi temporibus
              ea sint omnis, perferendis enim corporis.
            </p>
          </div>
        </div>
      )}
      <Link className={s.link} to={`/`}>
        Back to homepage
      </Link>
    </div>
  );
};

export default ArticlePage;
