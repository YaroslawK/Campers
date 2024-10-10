import css from './Hero.module.css'

export const Hero = () => {
    return <section className={css.hero}>
        <div className={css.heroContent}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroCaption}>You can find everything you want in our catalog</p>
            <button className={css.heroButton}>View Now</button>
            </div>
    </section>
}