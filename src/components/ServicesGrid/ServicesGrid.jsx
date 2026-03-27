import ServiceCard from '../ServiceCard/ServiceCard'
import styles from './ServicesGrid.module.css'

const services = [
  {
    id: 'service-godovoe-to',
    backgroundColor: '#22356f',
    title: 'Годовое ТО',
  },
  {
    id: 'service-vyravnivanie-koles',
    backgroundColor: '#0052c1',
    titleLines: ['Выравнивание', 'колес'],
  },
  {
    id: 'service-nastroyka-peredach',
    backgroundColor: '#76b58b',
    titleLines: ['Настройка', 'переключателей'],
  },
]

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className={styles.visuallyHidden}>
        Услуги: Годовое ТО, выравнивание колес, настройка переключателей
      </h2>
      <div className={styles.grid}>
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            id={item.id}
            backgroundColor={item.backgroundColor}
            title={item.title}
            titleLines={item.titleLines}
          />
        ))}
      </div>
    </section>
  )
}
