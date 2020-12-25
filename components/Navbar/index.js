import styles from "./Navbar.module.css";
import NavbarItem from "../NavbarItem";
import { useState } from "react";

function FormModal(props) {

    return (
        <div className={styles.modalWrapper} style={{ display: props.visible ? "flex" : "none" }}>
            <div className={styles.modal}>
                <div className="clearfix">
                    <button className={"btn btn-danger " + styles.btnClose} onClick={props.onClose}>Close</button>
                </div>
                <div className={styles.modalHeader}>{props.header}</div>
                <div className={styles.modalBody}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export default function Navbar() {
    const navbarItemList = [
        {text:"Mengapa Rakamin ?",href:"#why-rakamin"},
        {text:"Short Course",href:"#scourse"},
        {text:"Bootcamp",href:"#bootcamp"},
        {text:"Testimonial",href:"#testimoni"},
        {text:"Mitra",href:"#mitra"}
    ];


    const [visible, setVisible] = useState(false);
    const [visibleLogin , setVisibleLogin] = useState(false);


    function onDaftar(){
        console.log("on daftar...");
        setVisible(true);
    }

    function onLogin(){
        console.log("on login...");
        setVisibleLogin(true);
    }

    function submitLogin(){
        console.log("submit login...");
    }

    function submitDaftar(){
        console.log("submit daftar");
    }

    return (
        <>
            <FormModal onClose={()=> setVisibleLogin(false)} visible={visibleLogin}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username anda..."/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password anda..." className="form-control"/>
                </div>

                <div className="form-group">
                    <button type="button" onClick={submitLogin} className="btn btn-primary" style={{padding:"8px"}}>Login</button>
                </div>
            </FormModal>

            <FormModal onClose={()=> setVisible(false)} visible={visible}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username anda..."/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password anda..." className="form-control"/>
                </div>

                <div className="form-group">
                    <button type="button" onClick={submitDaftar} className="btn btn-primary" style={{padding:"8px"}}>Daftar</button>
                </div>
            </FormModal>
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

                    <div className={styles.innerNavbarItemContainer}>
                        <NavbarItem onClick={onDaftar}>Daftar</NavbarItem>
                        <NavbarItem onClick={onLogin}>Login</NavbarItem>
                    </div>
                </div>
            </nav>
        </>
    )
}