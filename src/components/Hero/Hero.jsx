import { useNavigate } from "react-router-dom";
import css from "./Hero.module.css";
import { MainButton } from "../../components/MainButton/MainButton";

export const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroCaption}>
          You can find everything you want in our catalog
        </p>
        <MainButton onClick={handleButtonClick}>View Now</MainButton>
      </div>
    </section>
  );
};
