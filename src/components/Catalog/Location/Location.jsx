import css from './Location.module.css';

export const Location = () => {

  return <>
    <p className={css.location}>Location</p>
    <input className={css.locationInput} placeholder='Kyiv, Ukraine' type="text" />
  </>;
};
