import styles from "./Bootcamp.module.css";


function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src="/img/bootcamp.png"/>
            <div className={styles.cardContent}>
                <h1 className={styles.cardTitle}>Bootcamp and Career Connector Program</h1>
                <p className={styles.cardText}>Pelatihan intensif selama 3,5 bulan, dan dibantu penyaluran kerja hingga dapat, tanpa batas waktu!</p>
                <a className="btn btn-secondary">Lihat Career Bootcamp</a>
            </div>
        </div>
    )
}

export default function Bootcamp(props) {
    return (
        <div id="bootcamp">
            <img className={styles.imgBootcamp} src="/img/bootcamp_wave.svg"/>
            <div className={styles.wrapper}>
                <Card/>
            </div>
        </div>
    )
}