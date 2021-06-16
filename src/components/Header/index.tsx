import Head from 'next/head'
import styles from '../../styles/components/Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Gil Vilarezz" />
    </header>
  )
}
