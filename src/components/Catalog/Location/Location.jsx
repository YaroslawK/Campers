import { useDispatch } from 'react-redux';
import { setLocationFilter } from '../../../redux/Trucks/filtersSlice';
import { useState } from 'react';
import css from './Location.module.css';

export const Location = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    const value = e.target.value;
    
    setLocation(value);
    dispatch(setLocationFilter(value));
  };

  return (
    <>
      <p className={css.location}>Location</p>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          <symbol id="icon-Map" viewBox="0 0 32 32">
            <path d="M31.632 0.224c0.112 0.080 0.208 0.208 0.256 0.336 0.064 0.144 0.112 0.288 0.112 0.432v28c0 0.224-0.096 0.448-0.24 0.64-0.144 0.176-0.352 0.288-0.576 0.336l-10 2c-0.128 0.032-0.256 0.032-0.384 0l-9.808-1.952-9.808 1.952c-0.144 0.032-0.288 0.032-0.432 0-0.144-0.048-0.272-0.112-0.4-0.208-0.112-0.096-0.208-0.208-0.256-0.336-0.064-0.144-0.096-0.288-0.096-0.432v-28c0-0.224 0.080-0.448 0.224-0.64 0.144-0.176 0.352-0.288 0.576-0.336l10-2c0.128-0.032 0.256-0.032 0.384 0l9.808 1.952 9.808-1.952c0.144-0.032 0.288-0.032 0.432 0 0.144 0.048 0.272 0.112 0.4 0.208zM20 3.808l-8-1.6v25.968l8 1.6v-25.968zM22 29.776l8-1.6v-25.968l-8 1.6v25.968zM10 28.176v-25.968l-8 1.6v25.968l8-1.6z"></path>
          </symbol>
        </defs>
      </svg>
      <svg className={css.icon} width="20" height="20">
        <use href="#icon-Map" />
      </svg>
      <input
        className={css.locationInput}
        placeholder="Kyiv, Ukraine"
        type="text"
        value={location}
        onChange={handleLocationChange}
      />
    </>
  );
};
