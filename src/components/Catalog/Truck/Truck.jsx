import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticlesApi } from "../../../api/articles-api";
import css from "../Truck/Truck.module.css";

export const Truck = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]); 
  const [visibleArticles, setVisibleArticles] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); 
  const perPage = 4;


  const getArticles = async () => {
    setLoading(true);
    const response = await getArticlesApi(); 
    console.log(response);
    
    setArticles(response); 
    setVisibleArticles(response.slice(0, perPage)); 
    setLoading(false);
  };

  useEffect(() => {
    getArticles(); 
  }, []);


  const loadMoreArticles = () => {
    const nextPage = page + 1; 
    const newVisibleArticles = articles.slice(0, nextPage * perPage); 
    setVisibleArticles(newVisibleArticles); 
    setPage(nextPage); 
  };

  const handleButtonClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  return (
    <>
      <div>
        <ul>
          {visibleArticles.length > 0 &&
            visibleArticles.map((article, index) => (
              <li key={`${article.id}-${index}`} className={css.truckContainer}>
                <div>
                  <img
                    className={css.image}
                    src={article.gallery[0].original}
                    alt={article.name}
                  />
                </div>
                <div>
                  <div className={css.cont}>
                  <h2 className={css.title}>{article.name}</h2>
                  <p className={css.price}>€{article.price}</p></div>
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
        {visibleArticles.length < articles.length && !loading && (
          <button onClick={loadMoreArticles} className={css.loadMoreButton}>
            Load more
          </button>
        )}
        {loading && <p>Loading...</p>}
        {visibleArticles.length >= articles.length && !loading && (
          <p>No more articles to load</p>
        )}
      </div>
    </>
  );
};
