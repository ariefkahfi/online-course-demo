import styles from "./Testimonial.module.css"


function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardText}>
                <p>{props.text}</p>
            </div>
            <div className={styles.cardFooter}>
                <img className={styles.cardImg} src={props.srcImg}/>
                <div className={styles.field}>
                    <h5 className={styles.name}>
                        {props.name}
                    </h5>
                    <p className={styles.role}>
                        {props.role}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonial(props) {
    return (
        <div id="testimoni" className={styles.container}>
            <div className={styles.descContainer}>
                <h3 className={styles.descTitle}>Apa Kata Siswa Kami​</h3>
                <p>Kami selalu memastikan kualitas layanan yang terbaik untuk membantu semua Siswa kami</p>
            </div>

            <div className={styles.gridContainer}>
                <Card
                    srcImg="/img/hengar.jpg"
                    name="Kevin Lee"
                    role="Product Designer at BuyOne"
                    text="Belajar di Rakamin membuka pandangan saya bahwa Data Scientist adalah profesi yang sangat menarik dan sangat dibutuhkan, pembelajarannya-pun sangat aplikatif!"
                />

                <Card
                    srcImg="/img/rendi.jpg"
                    name="Gilang Ramadhan"
                    role="Illustrator at Ide Grafis Indonesia"
                    text="Buat aku yang gak punya background digital marketing, belajar di Rakamin itu bikin lebih simpel, dan mudah dipahami. Kita juga bisa nanya real application-nya di dunia kerja langsung sama expert" 
                />

            </div>
        </div>
    )
}