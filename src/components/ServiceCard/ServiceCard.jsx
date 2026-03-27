import styles from './ServiceCard.module.css'

/**
 * Переиспользуемая карточка услуги: цвет фона и заголовок задаются через props.
 */
export default function ServiceCard({ id, backgroundColor, title, titleLines }) {
  const lines = titleLines ?? (title ? [title] : [])

  return (
    <article
      id={id}
      className={styles.card}
      style={{ backgroundColor }}
      aria-label={lines.join(' ')}
    >
      <div className={styles.accent} aria-hidden />
      <h3 className={styles.title}>
        {lines.length > 1 ? (
          <span className={styles.lines}>
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        ) : (
          lines[0]
        )}
      </h3>
    </article>
  )
}
