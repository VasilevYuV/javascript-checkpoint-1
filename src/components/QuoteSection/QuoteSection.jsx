import styles from './QuoteSection.module.css'

export default function QuoteSection() {
  return (
    <section className={styles.section} aria-label="О клиентах">
      <div className={styles.inner}>
        <p>
          Приехав к нам однажды, многие наши клиенты становятся постоянными, а
          часть из них даже друзьями.
        </p>
        <p>&nbsp;</p>
        <p>
          А также в нашей мастерской можно отремонтировать электросамокат и
          электровелосипед.
        </p>
      </div>
    </section>
  )
}
