import { useEffect, useState } from 'react';
import css from './Details.module.css';
import { useParams } from 'react-router-dom';
import { getArticlesApi } from '../../../../../api/articles-api';

export const Details = () => {
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

  if (!truckDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={css.iconContainer}>
        <button className={css.icon}>Automatic</button>
        <button className={css.icon}>AC</button>
        <button className={css.icon}>Petrol</button>
        <button className={css.icon}>Kitchen</button>
        <button className={css.icon}>Radio</button>
      </div>
<h2 className={css.detailsTitle}>Vehicle details</h2>
<table className={css.vehicleDetails}>
  <tbody>
    <tr>
      <th className={css.detailsItem}>Form</th>
      <td className={css.detailsItem}>{truckDetails.form}</td>
    </tr>
    <tr>
      <th className={css.detailsItem}>Length</th>
      <td className={css.detailsItem}>{truckDetails.length}</td>
    </tr>
    <tr>
      <th className={css.detailsItem}>Width</th>
      <td className={css.detailsItem}>{truckDetails.width}</td>
    </tr>
    <tr>
      <th className={css.detailsItem}>Height</th>
      <td className={css.detailsItem}>{truckDetails.height}</td>
    </tr>
    <tr>
      <th className={css.detailsItem}>Tank</th>
      <td className={css.detailsItem}>{truckDetails.tank}</td>
    </tr>
    <tr>
      <th className={css.detailsItem}>Consumption</th>
      <td className={css.detailsItem}>{truckDetails.consumption}</td>
    </tr>
  </tbody>
</table>


    </>
  );
};
