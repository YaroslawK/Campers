import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles, selectLoading } from '../../../redux/Trucks/slice';
import css from '../Truck/Truck.module.css';

export const Truck = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  
  const loading = useSelector(selectLoading);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    setVisibleArticles(articles.slice(0, page * perPage));
  }, [articles, page]);

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
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
                    <p className={css.price}>€{article.price}</p>
                  </div>
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
