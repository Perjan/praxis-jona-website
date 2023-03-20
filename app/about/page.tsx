import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

/// https://beta.nextjs.org/docs/installation
export default function About() {
  return (
    <main className={styles.main}>
      <h1>About Page!</h1>
    </main>
  );
}