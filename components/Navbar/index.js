import styles from "./Navbar.module.css";
import NavbarItem from "../NavbarItem";
import { useEffect, useState } from "react";
import Axios from "axios";


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


    const [isLogin , setIsLogin]= useState(false);
    const [currentUsername , setCurrentUsername] = useState("");
    const [visible, setVisible] = useState(false);
    const [visibleLogin , setVisibleLogin] = useState(false);
    const [usernameDaftar , setUsernameDaftar] = useState("");
    const [passDaftar , setPassDaftar] = useState("");


    const [usernameLogin, setUsernameLogin] = useState("");
    const [passLogin , setPassLogin] = useState("");
    


    function onDaftar(){
        console.log("on daftar...");
        setVisible(true);
    }



    function verifyToken(token){
        console.log("verifying...");
        Axios.post("/api/user",{
            token
        })
        .then(response=>{
            console.log("verifyToken response ok",response.data);
            setIsLogin(true);
            localStorage.setItem("AUTH-TOKEN",token);
            setCurrentUsername(response.data.message);
        })
        .catch(err=>{
            console.log("verifyToken response error",err.response)
            setIsLogin(false);
            localStorage.removeItem("AUTH-TOKEN");
            setCurrentUsername("");
        })
    }
    
    useEffect(()=>{
        const authToken = localStorage.getItem("AUTH-TOKEN");
        if(authToken) {
            verifyToken(authToken);
        }
    },[]);

    function onLogin(){
        console.log("on login...");
        setVisibleLogin(true);
    }

    function submitLogin(){
        console.log("submit login...");

        Axios.post("/api/login",{
            username: usernameLogin,
            password: passLogin
        })
        .then(response=>{
            verifyToken(response.data.message);
        }).finally(_=>{
            setVisibleLogin(false);
            setUsernameLogin("");
            setPassLogin("");
        })
    }

    function onLogout(){
        localStorage.removeItem("AUTH-TOKEN");
        setCurrentUsername("");
        setIsLogin(false);
    }

    function submitDaftar(){
        console.log("submit daftar");

        Axios.post("/api/register",{
                username: usernameDaftar,
                password: passDaftar
        })
        .then(x=>{
            alert("Berhasil daftar");
        }).catch(err=>{
            alert("Gagal daftar");
        }).finally(_=>{
            setVisible(false);
            setUsernameDaftar("");
            setPassDaftar("");
        })
    }

    return (
        <>
            <FormModal onClose={()=> setVisibleLogin(false)} visible={visibleLogin}>
                <div className="form-group">
                    <input type="text" onChange={(e)=> setUsernameLogin(e.target.value)} value={usernameLogin} name="usernameLogin" className="form-control" placeholder="Username anda..."/>
                </div>
                <div className="form-group">
                    <input type="password" onChange={e=> setPassLogin(e.target.value)} value={passLogin} name="passwordLogin" placeholder="Password anda..." className="form-control"/>
                </div>

                <div className="form-group">
                    <button type="button" onClick={submitLogin} className="btn btn-primary" style={{padding:"8px"}}>Login</button>
                </div>
            </FormModal>

            <FormModal onClose={()=> setVisible(false)} visible={visible}>
                <div className="form-group">
                    <input type="text" onChange={e=> setUsernameDaftar(e.target.value)} value={usernameDaftar} name="usernameDaftar" className="form-control" placeholder="Username anda..."/>
                </div>
                <div className="form-group">
                    <input type="password" onChange={e=> setPassDaftar(e.target.value)} value={passDaftar} name="passwordDaftar" placeholder="Password anda..." className="form-control"/>
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
                        {!isLogin && (
                            <>
                                <NavbarItem onClick={onDaftar}>Daftar</NavbarItem>
                                <NavbarItem onClick={onLogin}>Login</NavbarItem>
                            </>
                        )}
                        {isLogin && (
                            <>
                                <NavbarItem>{currentUsername}</NavbarItem>
                                <NavbarItem onClick={onLogout} className="btn btn-danger">Logout</NavbarItem>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}