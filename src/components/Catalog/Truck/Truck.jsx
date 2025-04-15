import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  selectArticles,
  selectLoading,
} from "../../../redux/Trucks/slice";
import { selectFilters } from "../../../redux/Trucks/filtersSlice";
import css from "../Truck/Truck.module.css";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../../MainButton/MainButton";
import star from "/public/star.svg";

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
        (!filters.location ||
          article.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (!filters.form ||
          article.form === filters.form ||
          (filters.form === "alcove" && article.form === "alcove") ||
          (filters.form === "fullyIntegrated" &&
            article.form === "fullyIntegrated") ||
          (filters.form === "panelTruck" && article.form === "panelTruck"))
      );
    });

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
        (!filters.location ||
          article.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (!filters.form ||
          article.form === filters.form ||
          (filters.form === "alcove" && article.form === "alcove") ||
          (filters.form === "fullyIntegrated" &&
            article.form === "fullyIntegrated") ||
          (filters.form === "panelTruck" && article.form === "panelTruck"))
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
                <p className={css.rating}>
                  <img src={star} alt="" />
                  {article.rating}
                </p>
                <p className={css.location}>{article.location}</p>
                <p className={css.description}>{article.description}</p>
                <div className={css.vehicleTypes}>
                  {article.transmission === "automatic" && (
                    <p className={css.typeIcon}>Automatic</p>
                  )}
                  {article.transmission === "manual" && (
                    <p className={css.typeIcon}>Manual</p>
                  )}
                  {article.fuel === "petrol" && (
                    <p className={css.typeIcon}>Petrol</p>
                  )}
                  {article.fuel === "diesel" && (
                    <p className={css.typeIcon}>Diesel</p>
                  )}
                  {article.fuel === "hybrid" && (
                    <p className={css.typeIcon}>Hybrid</p>
                  )}
                  {article.kitchen && <p className={css.typeIcon}>Kitchen</p>}
                  {article.AC && <p className={css.typeIcon}>AC</p>}
                  {article.bathroom && <p className={css.typeIcon}>Bathroom</p>}
                  {article.water && <p className={css.typeIcon}>Water</p>}
                  {article.gas && <p className={css.typeIcon}>Gas</p>}
                  {article.TV && <p className={css.typeIcon}>TV</p>}
                </div>
                <MainButton onClick={() => handleButtonClick(article.id)}>
                  Show more
                </MainButton>
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
