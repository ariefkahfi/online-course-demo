import styles from "./ShortCourse.module.css";

function CourseCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardImg} src={props.srcImg}/>
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{props.cardTitle}</h3>
                <p className={styles.cardText}>{props.cardText}</p>

                <div className={styles.mentorContainer}>
                    <h4 className={styles.mentorTitle}>MENTOR</h4>
                    {props.mentor.map((v,idx)=>(
                        <img key={idx} className={styles.mentorImg} src={v}/>
                    ))}
                </div>
            </div>
            <div className={styles.cardFooter}>
                <button className={"btn btn-primary " + styles.btnBuy}>Beli live class sekarang</button>
            </div>
        </div>
    )
}


export default function ShortCourse(props) {
    return (
        <div id="scourse" className={styles.wrapper}>
            <div className={styles.descContainer}>
                <h3 className={styles.descTitle}>Rakamin Short courses</h3>
                <p className={styles.descText}>
                    Pelatihan interaktif dua arah, studi kasus, dan diskusi di luar jam kelas, dengan durasi mulai dari Seminggu hingga Sebulan dengan beragam pilihan topik!
                </p>
            </div>
            <div className={styles.cardContainer}>
                <CourseCard 
                    srcImg={"/img/ui_ux.svg"}
                    cardTitle={"Kelas UI/UX Desain"}
                    cardText={"Mempelajari bidang UI/UX mulai dari tools yang digunakan, fundamental, research, visual, intercation, dll"}
                    mentor={["/img/mentor/mentor1.jpg","/img/mentor/mentor2.jpg","/img/mentor/mentor3.jpg"]}
                />
                <CourseCard
                    srcImg={"/img/analytics.svg"}
                    cardTitle={"Mahir Analisis Data Dengan Python"}
                    cardText={"Belajar Python untuk analisis data dari nol langsung oleh tutor yang keren dan berpengalaman. Dijamin sampai bisa!"}
                    mentor={["/img/mentor/mentor4.jpg"]}
                />
                <CourseCard
                    srcImg={"/img/olah_data.svg"}
                    cardTitle={"Olah Data dengan SQL dan Metabase"}
                    cardText={"Dibimbing dari nol, pelajari lebih dalam mengenai SQL dalam waktu singkat untuk mengembangkan karirmu!"}
                    mentor={[,"/img/mentor/mentor5.jpg","/img/mentor/mentor6.jpg"]}
                />
            </div>
        </div>
    )
}