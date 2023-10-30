import React from "react";
import styles from "../styles/navbar.module.css"
const NavbarItem = (props)=>{
    return(

        <div className= {`${styles.item} opacity-100`}>
            {props.icon}
            {props.text}
        </div>
    );

}

export default NavbarItem;