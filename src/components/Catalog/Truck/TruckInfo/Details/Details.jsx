import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTruckDetails, clearTruckDetails, selectTruckDetails } from '../../../../../redux/Trucks/detailsSlice';
import { selectArticles} from '../../../../../redux/Trucks/slice';
import css from './Details.module.css';

export const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const truckDetails = useSelector(selectTruckDetails);
  console.log(articles);
  

  useEffect(() => {
    if (articles.length > 0) {
      const article = articles.find(article => article.id === id);
      if (article) {
        dispatch(setTruckDetails(article)); 
      }
    }
    return () => {
      dispatch(clearTruckDetails()); 
    };
  }, [articles, id, dispatch]);

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
