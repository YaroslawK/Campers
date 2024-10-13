import { Navigation } from "../Navigation/Navigation";
import { Truck } from "./Truck/Truck";
import { Location } from "./Location/Location";
import css from "../Catalog/Catalog.module.css";
import { Filters } from "./Filters/Filters";

export const Catalog = () => {
  return (
    <>
      <Navigation />
      
        <div className={css.catalog}>
          <div className={css.container}>
            <Location />
            <Filters />
          </div>
          <div>
            <Truck />
          </div>
        </div>
    </>
  );
};
