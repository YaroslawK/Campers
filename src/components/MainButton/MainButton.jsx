import css from "./MainButton.module.css";

export const MainButton = ({ children, ...props }) => {
  return (
    <button className={css.button} {...props}>
      {children}
    </button>
  );
};
