import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, selectArticles, selectLoading } from "../../../../../redux/Trucks/slice";
import css from './Features.module.css';
import { useParams } from "react-router-dom";

export const Features = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectLoading);
  const { id } = useParams();
  const [truck, setTruck] = useState(null);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    if (articles.length > 0) {
      const foundTruck = articles.find(article => article.id === id);
      setTruck(foundTruck);
    }
  }, [articles, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!truck) {
    return <p>No features found</p>;
  }

  return (
    <div className={css.iconContainer}>
      {truck.transmission === "automatic" && (
        <p className={css.typeIcon}>Automatic</p>
      )}
      {truck.transmission === "manual" && (
        <p className={css.typeIcon}>Manual</p>
      )}
      {truck.fuel === "petrol" && (
        <p className={css.typeIcon}>Petrol</p>
      )}
      {truck.fuel === "diesel" && (
        <p className={css.typeIcon}>Diesel</p>
      )}
      {truck.fuel === "hybrid" && (
        <p className={css.typeIcon}>Hybrid</p>
      )}
      {truck.kitchen && <p className={css.typeIcon}>Kitchen</p>}
      {truck.AC && <p className={css.typeIcon}>AC</p>}
      {truck.bathroom && <p className={css.typeIcon}>Bathroom</p>}
      {truck.water && <p className={css.typeIcon}>Water</p>}
      {truck.gas && <p className={css.typeIcon}>Gas</p>}
      {truck.TV && <p className={css.typeIcon}>TV</p>}
    </div>
  );
};
