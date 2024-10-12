import { useState } from "react";
import { Details } from "../Details/Details";
import { Reviews } from "../Reviews/Reviews";
import css from "./InfoNavigation.module.css";
import { BookingForm } from "../BookingForm/BookingForm";

export const InfoNavigation = () => {
  const [InfoNavigation, setInfoNavigation] = useState("A");

  const renderComponent = () => {
    if (InfoNavigation === "A") {
      return <Details />;
    } else if (InfoNavigation === "B") {
      return <Reviews />;
    } else {
      return <div>Please select a component</div>;
    }
  };

  return (
    <>
      {" "}
      <div>
        <div className={css.container}>
          <button
            className={css.caption}
            onClick={() => setInfoNavigation("A")}
          >
            Features
          </button>
          <button
            className={css.caption}
            onClick={() => setInfoNavigation("B")}
          >
            Review
          </button>
        </div>
        <div className={css.infoContainer}>
          <div className={css.featuresContainer}>{renderComponent()}</div>
          <div className={css.formContainer}>
            <BookingForm />
          </div>
        </div>
      </div>{" "}
    </>
  );
};
