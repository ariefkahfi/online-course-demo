import styles from "./Jumbotron.module.css"

export default function Jumbotron(props) {
    return (
        <div className={styles.jumbotronContainer}>
            <div className={styles.jumbotronText}>
                <h1 className={styles.jumbotronTitle}>
                    Upgrade Skill & Mulai Karir Teknologimu Bersama Kami
                </h1>
                <p className={styles.jumbotronDesc}>
                    Rakamin Academy menghubungkanmu dengan Expert dari Top-Tech Company, belajar skill sesuai dengan standar industri, berjejaring dalam komunitas, hingga dibantu penyaluran kerja!
                </p>
                <div className={styles.jumbotronBtnContainer}>
                    <a href="#bootcamp" className={styles.jumboBtn + " btn btn-primary"}>Lihat career bootcamp</a>
                    <a href="#scourse" className={styles.jumboBtn + " btn btn-secondary"}>Lihat short course</a>
                </div>
            </div>
            <div className={styles.jumbotronImgWrapper}>
                <img src="/img/online_course.svg" className={styles.jumboImg}/>
            </div>
        </div>
    )
}