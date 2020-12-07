import Head from 'next/head'
import styles from './index.module.css'
import useSound from 'use-sound';
import {useState} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  const [play, {stop}] = useSound("/meatball.mp3");
  const handleClick = () => {
    stop();
    play();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Danger Ketchup: Coming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cover}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon</h1>
        <img onClick={handleClick} src="/stickerpeel.png" width={350} height={350} className={styles.logo} />
        
        <div className={styles.brandsBar}>
          <a href="https://www.facebook.com/JTsDangerKetchup"><FontAwesomeIcon icon={faFacebook} className={styles.brandIcon} color="white" /></a>
          <a href="https://www.instagram.com/jtsdangerketchup/"><FontAwesomeIcon icon={faInstagram} className={styles.brandIcon} color="white" /></a>
        </div>
      </main>
    </div>
  )
}
