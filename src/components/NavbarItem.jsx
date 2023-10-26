import React from "react";
import styles from "../styles/navbar.module.css"
const NavbarItem = (props)=>{
    return(

        <div className={styles.item} >
            {props.icon}
            {props.text}
        </div>
    );

}

export default NavbarItem;