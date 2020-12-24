import styles from "./NavbarItem.module.css";


export default function NavbarItem(props){
    return (
        <a className={styles.navbarItem} {...props}>
            {props.children}
        </a>
    )
}