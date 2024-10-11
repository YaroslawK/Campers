import { Navigation } from "../../../Navigation/Navigation";
import { BookingForm } from "./BookingForm/BookingForm";
import { InfoNavigation } from "./InfoNavigation/InfoNavigation";
import { useEffect, useState } from "react";
import { getArticlesApi } from "../../../../api/articles-api";

export const TruckInfo = () => {
  const [articles, setArticles] = useState([]);
  
  

  useEffect(() => {
    const getArticles = async () => {
      const response = await getArticlesApi();
      console.log(response);
      
      setArticles(response);
    };
    getArticles();
  }, []);
  return (
    <>
      <Navigation />
      <ul>
        
          {articles.length > 0 &&
            articles.map((article) => (
              <li key={article.id}>{article.name }</li>
            ))}
       
      </ul>
      <p>Review</p>
      <p>Location</p>
      <p>Price</p>
      <img src="" alt="" />
      <p>view</p>
      <InfoNavigation />
      <BookingForm />
    </>
  );
};
