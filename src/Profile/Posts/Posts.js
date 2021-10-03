import React from 'react';
import s from './Posts.module.css';
import Write from './Write/Write.js'

const Posts = (props) => {
    let PostsElement = props.PostsInfo.map(p => <Write message={p.message} like={p.like} dislike={p.dislike} id={p.id} name={p.name}/>)
    return (
        <div className={s.posts}>
            <input placeholder="write..."></input>
            <button>POST</button>
            {PostsElement}
        </div>
    );
}
export default Posts