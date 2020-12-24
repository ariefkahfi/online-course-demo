import styles from "./Navbar.module.css";
import NavbarItem from "../NavbarItem";

export default function Navbar() {
    const navbarItemList = [
        {text:"Mengapa Rakamin ?",href:"#why-rakamin"},
        {text:"Short Course",href:"#scourse"},
        {text:"Bootcamp",href:"#bootcamp"},
        {text:"Testimonial",href:"#testimoni"},
        {text:"Mitra",href:"#mitra"}
    ];
    return (
        <nav className={styles.navbar}>
            <a className={styles.navbarBrand}>
                <img className={styles.navbarBrandImage} src="/img/rakamin_logo.png" alt="No Image..."/>
            </a>        
            <div className={styles.navbarItemContainer}>
                {navbarItemList.map(({ href , text} , idx)=>(
                    <NavbarItem key={idx} href={href}>
                        {text}
                    </NavbarItem>
                ))}
            </div>
        </nav>
    )
}