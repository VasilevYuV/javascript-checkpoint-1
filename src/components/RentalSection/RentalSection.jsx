import { publicAsset } from '../../utils/publicAsset'
import styles from './RentalSection.module.css'

const rentalImg = publicAsset('images/rental.png')

export default function RentalSection() {
  return (
    <section className={styles.section} id="rental" aria-labelledby="rental-title">
      <div className={styles.imageCol}>
        <img src={rentalImg} width={637} height={800} alt="Прокат велосипедов" />
      </div>
      <div className={styles.textCol}>
        <h2 id="rental-title" className={styles.title}>
          Прокат велосипедов
        </h2>
        <p className={styles.body}>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные
          велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </section>
  )
}
