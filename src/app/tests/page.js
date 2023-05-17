import Image from 'next/image'
import Link from 'next/link'
import styles from 'src/app/styles/home.module.css'

export default function Page() {
    return (<div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hey hey <a href="https://nextjs.org">Next.js!</a>
          </h1>

        </main>
      </div>)
  }