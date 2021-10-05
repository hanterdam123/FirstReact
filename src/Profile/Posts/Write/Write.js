import React from 'react'
import s from '../Write/Write.module.css'

const Write = (props) => {
    return (
        <div className={s.write}>
            <div className={s.info}>
            <img src={props.photo}></img>
            <span>{props.name}</span>
            </div>
            <div className={s.block}>
                <div className={s.message}>{props.message}</div>
                <img className={s.like} src="https://avatars.mds.yandex.net/get-zen_doc/1040957/pub_5c183d26c6ce5f00ad21490d_5c184ca6e2f26100aaeaf2c9/scale_1200"></img>
                <span>{props.like}</span>
                <img className={s.dislike} src="https://im0-tub-ru.yandex.net/i?id=79c7eb8d195cef74ce3a6a9625e0b17b&n=13"></img>
                <span>{props.dislike}</span>
            </div>
        </div>
    );
}
export default Write;