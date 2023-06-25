import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile'className={(isActive) => isActive ? s.active : s.item }>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/Dialogs' className={( isActive ) => isActive ? s.active : s.item }>Message</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/News' className={(isActive ) => isActive ? s.active : s.item }>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/Music' className={( isActive ) => isActive ? s.active : s.item }>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/Settings' className={( isActive ) => isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar