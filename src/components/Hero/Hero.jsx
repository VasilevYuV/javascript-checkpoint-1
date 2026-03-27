import { publicAsset } from '../../utils/publicAsset'
import styles from './Hero.module.css'

const heroImg = publicAsset('images/hero-dino.png')

export default function Hero() {
  return (
    <section className={styles.hero} id="about" aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Веломастерская «Велозар»
        </h1>
        <p className={styles.text}>
          Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди,
          которые смогли превратить свое увлечение и хобби в профессию. Мы сами
          любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только
          радость и удовольствие от езды.
        </p>
      </div>
      <figure className={styles.figure}>
        <img src={heroImg} width={543} height={533} alt="Иллюстрация велосипедиста" />
      </figure>
    </section>
  )
}
