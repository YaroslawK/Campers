import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticlesApi } from "../../../api/articles-api";
import css from "../Truck/Truck.module.css";

export const Truck = () => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await getArticlesApi();

      setArticles(response);
    };
    getArticles();
  }, []);

  return (
    <>
      <div>
        <ul>
          {articles.length > 0 &&
            articles.map((article) => (
              <li key={article.id} className={css.truckContainer}>
                <div>
                  <img
                    className={css.image}
                    src={article.gallery[0].original}
                    alt={article.name}
                  />
                </div>
                <div>
                  <h2 className={css.title}>{article.name}</h2>
                  <p className={css.price}>{article.price}</p>
                  <p className={css.rating}>{article.rating}</p>
                  <p className={css.location}>{article.location}</p>
                  <p className={css.description}>{article.description}</p>
                  <button className={css.icon}>Automatic</button>
                  <button className={css.icon}>Petrol</button>
                  <button className={css.icon}>Kitchen</button>
                  <button className={css.icon}>AC</button>
                  <button
                    className={css.button}
                    onClick={() => handleButtonClick(article.id)}
                  >
                    Show more
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
