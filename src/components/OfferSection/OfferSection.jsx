import { publicAsset } from '../../utils/publicAsset'
import styles from './OfferSection.module.css'

const workshopImg = publicAsset('images/workshop.png')

export default function OfferSection() {
  return (
    <section className={styles.section} id="offer" aria-labelledby="offer-title">
      <div className={styles.textCol}>
        <h2 id="offer-title" className={styles.title}>
          Что мы предлагаем
        </h2>
        <p className={styles.body}>
          В нашей мастерской можно выполнить комплексное техническое обслуживание
          велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы.
          Вовремя проведенное ТО велосипеда помогает избежать многих проблем и
          дорогого ремонта. Все работы выполняем качественно и с душой.
        </p>
      </div>
      <div className={styles.imageCol}>
        <img src={workshopImg} width={522} height={607} alt="Ремонт велосипеда в мастерской" />
      </div>
    </section>
  )
}
