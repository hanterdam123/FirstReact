import React from 'react';
import s from '../Navbar.module.css';

const Sidebar = (props) => {
    return (
        <img src={props.photo} className={s.nav_img}></img>
    )
}

export default Sidebar