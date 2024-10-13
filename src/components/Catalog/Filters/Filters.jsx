import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/Trucks/filtersSlice";
import css from "./Filters.module.css";
import { useState } from "react";

export const Filters = () => {
  const dispatch = useDispatch();

  const [filters, setLocalFilters] = useState({
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  });

  const handleFilterChange = (key) => {
    const updatedFilters = { ...filters, [key]: !filters[key] };
    
    setLocalFilters(updatedFilters);
    dispatch(setFilters(updatedFilters));
  };

  const handleFormFilterChange = (formType) => {
    const updatedFilters = { ...filters, form: formType };
    setLocalFilters(updatedFilters);
    dispatch(setFilters(updatedFilters));
  };

  return (
    <>
      <h2 className={css.filtersTitle}>Filters</h2>
      <h3 className={css.filters}>Vehicle equipment</h3>
      <div className={css.filtersContainer}>
        <button
          className={filters.AC ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFilterChange("AC")}
        >
          AC
        </button>
        <button
          className={filters.automatic ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFilterChange("automatic")}
        >
          Automatic
        </button>
        <button
          className={filters.kitchen ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFilterChange("kitchen")}
        >
          Kitchen
        </button>
        <button
          className={filters.TV ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFilterChange("TV")}
        >
          TV
        </button>
        <button
          className={filters.bathroom ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFilterChange("bathroom")}
        >
          Bathroom
        </button>
      </div>

      <h3 className={css.filters}>Vehicle type</h3>
      <div className={css.filtersContainer}>
        <button
          className={filters.form === "panelTruck" ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFormFilterChange("panelTruck")}
        >
          Van
        </button>
        <button
          className={filters.form === "fullyIntegrated" ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFormFilterChange("fullyIntegrated")}
        >
          Fully Integrated
        </button>
        <button
          className={filters.form === "alcove" ? css.filtersIconActive : css.filtersIcon}
          onClick={() => handleFormFilterChange("alcove")}
        >
          Alcove
        </button>
      </div>
    </>
  );
};
