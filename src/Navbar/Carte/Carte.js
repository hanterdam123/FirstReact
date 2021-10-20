import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navbar.module.css';

const Carte = (props) => {
    return (
        <li>
          <NavLink to={props.src} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    );
}

export default Carte