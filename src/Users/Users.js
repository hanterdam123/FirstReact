
import React from "react"
import s from './Users.module.css'
import * as axios from 'axios'

let Users = (props) => {
    if(props.Users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=> {
            props.setUsers(response.data.items)
        })
    }
    
    return (
    <div class={s.main}>
            Users
            {props.Users.map(p => 
    <div key={p.id}>
        <div class={s.main_users}>
            <div>
                <img src={p.photo}/>
                <p>{p.name}</p>
                {p.status}
            </div>
            <div>
                {p.followed ? <button onClick={props.follow(p.id)}>UNFOLLOW</button> : <button onClick={props.unfollow(p.id)}>FOLLOW</button>}
            </div>
        </div>
        <div class={s.users_loc}>
            
        </div>
    </div>
    )}
    
    </div>
    )
}

export default Users