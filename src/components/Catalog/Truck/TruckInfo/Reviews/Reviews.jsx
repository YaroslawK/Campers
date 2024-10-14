import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesApi } from "../../../../../api/articles-api";
import css from './Reviews.module.css'

export const Reviews = () => {
  const [truckDetails, setTruckDetails] = useState(null);
    const { id } = useParams();
    
  
  useEffect(() => {
    const fetchTruckDetails = async () => {
      const response = await getArticlesApi(); 
      const article = response.find((article) => article.id === id); 
      if (article) {
        setTruckDetails(article); 
      }
    };
    fetchTruckDetails();
  }, [id]);

  if (!truckDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      {truckDetails.reviews.length > 0 ? (
        truckDetails.reviews.map((review, index) => (
          <div key={index} className={css.container}>
            <p className={css.reviewerName}>{review.reviewer_name}</p>
            <p className={css.reviewerComment}>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </>
  );
};
