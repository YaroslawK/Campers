import { useNavigate } from "react-router-dom";
import css from './Hero.module.css';
export const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return <div className={css.background}>
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroCaption}>You can find everything you want in our catalog</p>
        <button className={css.heroButton} onClick={handleButtonClick}>
          View Now
        </button>
      </div>
    </section>
</div>
};