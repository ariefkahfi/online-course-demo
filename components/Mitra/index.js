import styles from "./Mitra.module.css";

function MitraImg(props) {
    return (
        <img className={styles.mitraImg} src={props.srcImg}/>
    )
}


export default function Mitra(props) {

    let mitras = [];
    for(let i = 1; i<=7; i++) {
        mitras.push(
            <MitraImg key={i} srcImg={`/img/mitra/mitra${i}.png`}/>
        )
    }

    return (
        <div id="mitra" className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Kami Telah Melatih Ratusan Karyawan Dari Berbagai Perusahaan Ternama Di Indonesia</h1>
                <div className={styles.mitraList}>
                    {mitras}
                </div>
            </div>
        </div>
    )
}