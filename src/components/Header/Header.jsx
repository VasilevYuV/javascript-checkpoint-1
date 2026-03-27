import { scrollToSection, scrollToTop } from '../../utils/scroll'
import { publicAsset } from '../../utils/publicAsset'
import styles from './Header.module.css'

const logoSrc = publicAsset('images/logo.png')

export default function Header() {
  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.logo}
        onClick={() => scrollToTop()}
        aria-label="Велозар — на главную"
      >
        <img src={logoSrc} width={118} height={119} alt="" />
      </button>
      <nav aria-label="Основная навигация">
        <ul className={styles.nav}>
          <li className={`${styles.navItem} ${styles.navItemActive}`}>
            <button
              type="button"
              className={styles.navLink}
              onClick={() => scrollToSection('about')}
            >
              О нас
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              type="button"
              className={styles.navLink}
              onClick={() => scrollToSection('offer')}
            >
              Услуги
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              type="button"
              className={styles.navLink}
              onClick={() => scrollToSection('rental')}
            >
              Аренда
            </button>
          </li>
        </ul>
      </nav>
      <button type="button" className={styles.cta}>
        Связаться
      </button>
    </header>
  )
}
