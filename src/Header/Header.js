import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"></img>
        <div className={s.login}>
            <p>{props.login}</p>
            {props.isAuth == true ? <button onClick={props.Logout}>Logout</button> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
    );
}
export default Header