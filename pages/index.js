import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import WhyRakamin from "../components/WhyRakamin";
import ShortCourse from "../components/ShortCourse";


export default function Home() {
  return (
    <>
      <Head>
        <title>Rakademin Academy - Mulai Karir Teknologimu, Bersama Kami</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css"/>
      </Head>

      <div className={styles.overlay}>
        <div className={styles.overlayRect}/>
        <img className={styles.overlayWave} src="/img/wave.svg"/>
      </div>

      <div className={styles.mainWrapper}>
          <Navbar/>
          <Jumbotron/>
          <div className={styles.mainContent}>
            <WhyRakamin/>
            <ShortCourse/>
          </div>
      </div>


    </>
  )
}
