import css from "./Filters.module.css";

export const Filters = () => {
  return (
    <>
      <h2 className={css.filtersTitle}>Filters</h2>
      <h3 className={css.filters}>Vehicle equipment</h3>
      <div className={css.filtersContainer}>
        <button className={css.filtersIcon}>AC</button>
        <button className={css.filtersIcon}>Authomatic</button>
        <button className={css.filtersIcon}>Kitchen</button>
        <button className={css.filtersIcon}>TV</button>
        <button className={css.filtersIcon}>Bathroom</button>
      </div>

      <h3 className={css.filters}>Vehicle type</h3>
      <div className={css.filtersContainer}>
        <button className={css.filtersIcon}>Van</button>
        <button className={css.filtersIcon}>Fully Integrated</button>
        <button className={css.filtersIcon}>Alcove</button>
        <button className={css.filtersIcon}>Search</button>
      </div>
    </>
  );
};
