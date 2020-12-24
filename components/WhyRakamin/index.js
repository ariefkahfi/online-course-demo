import styles from "./WhyRakamin.module.css";


function AdvantagesGrid(props) {
    return  (
        <div>
            <img src={props.srcImg} className={styles.adGridImg} style={{
                backgroundColor: props.backgroundColor
            }}/>
            <h4 className={styles.adGridTitle}>{props.title}</h4>
            <p className={styles.adGridText}>
                {props.text}
            </p>
        </div>
    )
}

export default function WhyRakamin(props) {
    return (
        <div id="why-rakamin" className={styles.container}>
            <div className={styles.desc}>
                <h2 className={styles.title}>Mengapa Bootcamp di Rakamin Academy Berbeda?</h2>
                <div className={styles.grid}>
                    <AdvantagesGrid
                        srcImg="/img/project.svg"
                        title="Project Based"
                        text="Kami menerapkan tahapan pendidikan yang tertinggi, yaitu membuat. Dalam kelas kami, setiap peserta akan mendapatkan challenge untuk menyelesaikan suatu project dari 0, dibimbing hingga mendapat hasil yang maksimal. Proses inilah yang membantu tiap skill yang dipelajari benar-benar menjadi kompetensi baru dari siswa kami."
                        backgroundColor="#2B90F7"
                    />

                    <AdvantagesGrid
                        srcImg="/img/affordable.svg"
                        title="Most Affordable"
                        text="Model bisnis yang kami terapkan membuat kelas yang tersedia menjadi sangat terjangkau bagi siapapun yang mau belajar dan menjadi ahli di bidangnya!"
                        backgroundColor="#409EB3"
                    />

                    <AdvantagesGrid
                        srcImg="/img/social.svg"
                        title="Social Learning"
                        text="Belajar gak akan asik kalau sendiri, oleh karena itu kami membangun suasana belajar seperti komunitas sehingga antar peserta dan tutor akan saling kenal dan engage, dan bisa terus belajar bahkan setelah kelas selesai!"
                        backgroundColor="#FD9043"
                    />

                    <AdvantagesGrid
                        srcImg="/img/work.svg"
                        title="Penyaluran Kerja"
                        text="Setelah lulus, kamu akan kami bantu salurkan kerja ke lebih dari 15 Head-Hunter dengan ratusan lowongan kerja setiap bulannya, tanpa batasan waktu, tanpa biaya tambahan."
                        backgroundColor="#FF0004"
                    />



                </div>
            </div>
            <div className={styles.img}>
                
            </div>
        </div>
    )
}