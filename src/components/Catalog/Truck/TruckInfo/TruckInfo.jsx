import { Navigation } from "../../../Navigation/Navigation";
import { InfoNavigation } from "./InfoNavigation/InfoNavigation";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTruckDetails,
  selectTruckDetails,
  selectLoading,
} from "../../../../redux/Trucks/truckSlice";
import css from "../TruckInfo/TruckInfo.module.css";
import star from "/public/star.svg";

export const TruckInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truckDetails = useSelector(selectTruckDetails);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTruckDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Navigation />

      {loading ? (
        <p>Loading...</p>
      ) : truckDetails ? (
        <div className={css.container}>
          <h2 className={css.title}>{truckDetails.name}</h2>
          <p className={css.price}>€{truckDetails.price}.00</p>

          <p className={css.rating}>
            <img src={star} alt="" />
            {truckDetails.rating}
          </p>
          <p className={css.location}> Location: {truckDetails.location}</p>
          <div className={css.imageContainer}>
            {truckDetails.gallery.map((image, index) => (
              <img
                className={css.image}
                key={index}
                src={image.original}
                alt={`${truckDetails.name} image ${index + 1}`}
              />
            ))}
          </div>
          <p className={css.description}>{truckDetails.description}</p>
        </div>
      ) : (
        <p>No truck details found</p>
      )}

      <InfoNavigation />
    </>
  );
};
