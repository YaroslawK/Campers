import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, selectArticles, selectLoading } from "../../../redux/Trucks/slice";
import { selectFilters } from "../../../redux/Trucks/filtersSlice";
import css from "../Truck/Truck.module.css";

export const Truck = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);  

  const [visibleArticles, setVisibleArticles] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    const filteredArticles = articles.filter((article) => {
      return (
        (!filters.AC || article.AC) &&
        (!filters.automatic || article.transmission === "automatic") &&
        (!filters.kitchen || article.kitchen) &&
        (!filters.TV || article.TV) &&
        (!filters.bathroom || article.bathroom) &&
        (!filters.form || article.form === filters.form)
      );
    });
    setVisibleArticles(filteredArticles.slice(0, page * perPage));
  }, [articles, filters, page]);

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
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
                  <p className={css.price}>€{article.price}.00</p>
                </div>
                <p className={css.rating}>{article.rating}</p>
                <p className={css.location}>{article.location}</p>
                <p className={css.description}>{article.description}</p>
                <button className={css.icon}>Automatic</button>
                <button className={css.icon}>Petrol</button>
                <button className={css.icon}>Kitchen</button>
                <button className={css.icon}>AC</button>
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
  );
};
