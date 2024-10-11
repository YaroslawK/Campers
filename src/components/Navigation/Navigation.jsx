// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


export const Navigation = () => {

    return (<div className={css.navigationSection}>
        <a href='/' className={css.logo}>Travel <span className={css.logoSpan}>Trucks</span></a> 
        <div className={css.navigation}>
      <NavLink to='/' className={css.nav}>
          Home
      </NavLink>
      
      <NavLink to='/catalog' className={css.nav}>
          Catalog
      </NavLink>
        </div>
    </div>
  );
};

