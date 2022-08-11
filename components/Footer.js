import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/1F425.svg" alt="Bird" className={styles.logo} />
      </footer>
    </>
  )
}
