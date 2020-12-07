import Head from 'next/head'
import styles from './index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danger Ketchup: Coming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cover}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon</h1>
        <img src="/stickerpeel.png" alt="Vercel Logo" className={styles.logo} />
        
        <div className={styles.brandsBar}>
          <FontAwesomeIcon icon={faFacebook} className={styles.brandIcon} color="white" />
          <FontAwesomeIcon icon={faInstagram} className={styles.brandIcon} color="white" />
        </div>
      </main>
    </div>
  )
}
