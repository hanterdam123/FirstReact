import React from "react";
import s from '../Users/Users.module.css'
import {NavLink} from 'react-router-dom'
import loader from './loader.gif'
import * as axios from "axios";

let Users = (props) => {
    
    return (
    <div className={s.main}>
        <p>Users</p>
        {props.isFetching ? <img className={s.loader} src={loader}/> : null}
        <ul className={s.numbers}>
        {props.pages.map(p => {
            return (
                <li onClick={() => {props.onPageChange(p)}} className={props.currentPage === p && s.selectedPage}>{p}</li>
            )
        })}
        </ul>
        {props.users.map(p => {
        return (
        <div>
            <div className={s.main_users}>
                <div className={s.info_users}>
                    <NavLink to={'/profile/' + p.id}><img src={p.photos.small !== null ? p.photos.small : 'https://p7.hiclipart.com/preview/32/407/768/computer-icons-man-clip-art-man.jpg' }/></NavLink>
                    <p>{p.name}</p>
                    <p>{p.status}</p>
                    {p.followed === true ? 
                    <button onClick={() => {
                        props.unfollow(p.id)
                    }}>UNFOLLOW</button> : 
                    <button onClick={() => {
                        props.follow(p.id)
                        }}>
                        FOLLOW</button>
                    }
                </div>
            </div>
        </div>)}
        )}

        </div>)
}

export default Users