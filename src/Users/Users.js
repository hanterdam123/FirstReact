import React from "react";
import s from '../Users/Users.module.css'

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for(let i = 1; i <= pageCount;i++) {
        if(pages.length < 10) {
            pages.push(i)
        }
    }

    return (
    <div className={s.main}>
        <p>Users</p>
        {props.users.map(p => {
        return (
        <div>
            <div className={s.main_users}>
                <div>
                    
                    <p>{p.name}</p>
                    {p.status}
                </div>
                <div>
                </div>
            </div>
            <div className={s.users_loc}>
            
            </div>
        </div>)}
        )}
        </div>)
}

export default Users