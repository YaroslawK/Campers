// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


export const Navigation = () => {

  return (<div className={css.navigation}>
      <NavLink to='/' className={css.nav}>
          Home
      </NavLink>
      
      <NavLink to='/catalog' className={css.nav}>
          Catalog
      </NavLink>
      </div>
  );
};

