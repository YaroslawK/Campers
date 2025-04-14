import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <section className={css.navSection}>
      <div className={css.navigationContainer}>
        <a href="/" className={css.logo}>
          Travel<span className={css.logoSpan}>Trucks</span>
        </a>
        <div className={css.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.nav} ${css.active}` : css.nav
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${css.nav} ${css.active}` : css.nav
            }
          >
            Catalog
          </NavLink>
        </div>
      </div>
    </section>
  );
};
