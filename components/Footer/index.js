import styles from "./Footer.module.css"


function SubMenu(props) {
    return (
        <div>
            <h4 className={styles.submenuTitle}>{props.title}</h4>
            <div className={styles.submenu}>
                {props.menus.map((x,idx)=>(
                    <a className={styles.menuItem} key={idx}>{x}</a>
                ))}
            </div>
        </div>
    )
}

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <img src="/img/footer_wave.svg" className={styles.wave}/>
            <div className={styles.wrapper}>
                <div className={styles.body}>
                    <div className={styles.rakaminLeft}>
                        <a className={styles.brand}>
                            <img src="/img/rakamin_logo.png" className={styles.brandImg}/>
                        </a>
                        <h5 className={styles.brandTitle}>PT. Rakamin Kolektif Madani</h5>
                        <p className={styles.brandText}>CoHive Coworking Space, Bella Terra UG Ground, Kelapa Gading, Jakarta Utara.</p>
                    </div>
                    <div className={styles.menu}>
                        <SubMenu title="Produk" menus={["Career Bootcamp","Untuk Bisnis"]}/>
                        <SubMenu title="Perusahaan" menus={["Tentang Rakamin"]}/>
                        <SubMenu title="Dukungan" menus={["Refund Policies"]}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}