import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, selectArticles, selectLoading } from "../../../redux/Trucks/slice";
import { selectFilters } from "../../../redux/Trucks/filtersSlice";
import css from "../Truck/Truck.module.css";
import { useNavigate } from "react-router-dom";

export const Truck = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);

  const [visibleArticles, setVisibleArticles] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 4;
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/catalog/${id}`);
  };

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
        (!filters.water || article.water) &&
        (!filters.gas || article.gas) &&
        (!filters.form || 
          article.form === filters.form || 
          filters.form === "alcove" && article.form === "alcove" ||
          filters.form === "fullyIntegrated" && article.form === "fullyIntegrated" ||
          filters.form === "panelTruck" && article.form === "panelTruck")
      );
    });

    console.log(filteredArticles);

    const newVisibleArticles = filteredArticles.slice(0, page * perPage);
    setVisibleArticles(newVisibleArticles);
  }, [articles, filters, page]);

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const hasMoreArticles = () => {
    const filteredArticles = articles.filter((article) => {
      return (
        (!filters.AC || article.AC) &&
        (!filters.automatic || article.transmission === "automatic") &&
        (!filters.kitchen || article.kitchen) &&
        (!filters.TV || article.TV) &&
        (!filters.bathroom || article.bathroom) &&
        (!filters.water || article.water) &&
        (!filters.gas || article.gas) &&
        (!filters.form || 
          article.form === filters.form || 
          filters.form === "alcove" && article.form === "alcove" ||
          filters.form === "fullyIntegrated" && article.form === "fullyIntegrated" ||
          filters.form === "panelTruck" && article.form === "panelTruck")
      );
    });
    return visibleArticles.length < filteredArticles.length;
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

                {article.transmission === "automatic" && (
                  <button className={css.icon}>Automatic</button>
                )}
                {article.transmission === "manual" && (
                  <button className={css.icon}>Manual</button>
                )}
                {article.fuel === "petrol" && (
                  <button className={css.icon}>Petrol</button>
                )}
                {article.fuel === "diesel" && (
                  <button className={css.icon}>Diesel</button>
                )}
                {article.fuel === "hybrid" && (
                  <button className={css.icon}>Hybrid</button>
                )}
                {article.kitchen && (
                  <button className={css.icon}>Kitchen</button>
                )}
                {article.AC && (
                  <button className={css.icon}>AC</button>
                )}
                {article.bathroom && (
                  <button className={css.icon}>Bathroom</button>
                )}
                {article.water && (
                  <button className={css.icon}>Water</button>
                )}
                {article.gas && (
                  <button className={css.icon}>Gas</button>
                )}
                {article.TV && (
                  <button className={css.icon}>TV</button>
                )}


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
      {!loading && (
        <>
          {hasMoreArticles() ? (
            <button onClick={loadMoreArticles} className={css.loadMoreButton}>
              Load more
            </button>
          ) : (
            <p>No more articles to load</p>
          )}
        </>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};
