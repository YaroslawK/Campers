import { Navigation } from "../../../Navigation/Navigation";
// import { BookingForm } from "./BookingForm/BookingForm";
import { InfoNavigation } from "./InfoNavigation/InfoNavigation";
import { useEffect, useState } from "react";
import { getArticlesApi } from "../../../../api/articles-api";
import { useParams } from "react-router-dom";
import css from '../TruckInfo/TruckInfo.module.css'

export const TruckInfo = () => {
  const [articles, setArticles] = useState([]);
  const [truckDetails, setTruckDetails] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    const getArticles = async () => {
      const response = await getArticlesApi();
      setArticles(response);
    };
    getArticles();
  }, []);

  useEffect(() => {
    const fetchTruckDetails = async () => {
      const article = articles.find(article => article.id === id);
      if (article) {
        setTruckDetails(article); 
      }
    };
    
    if (articles.length > 0) {
      fetchTruckDetails();
    }
  }, [articles, id]);

  return (
    <>
      <Navigation />
      {truckDetails ? ( 
        <div className={css.container}>
          <h2 className={css.title}>{truckDetails.name}</h2>
          <p className={css.price}>€{truckDetails.price}</p>
          <p className={css.rating}>{truckDetails.rating}</p>
          <p className={css.location}> Location: {truckDetails.location}</p>
          <div className={css.imageContainer}>
          {truckDetails.gallery.map((image, index) => (
  <img className={css.image} key={index} src={image.original} alt={`${truckDetails.name} image ${index + 1}`} />
))}</div>
          <p className={css.description}>{truckDetails.description}</p>
        </div>
      ) : (
        <p>Loading...</p> 
      )}
      
      <InfoNavigation />
    </>
  );
};
