import React from 'react';
import s from './Posts.module.css';
import Write from './Write/Write.js';


const Posts = (props) => {
    let PostsElement = props.PostsInfo.map(p => <Write message={p.message} like={p.like} dislike={p.dislike} id={p.id} name={p.name} photo={p.photo}/>)
    let newPostElement = React.createRef();

    let AddPost = (props) => {
    let text = newPostElement.current.value;
    props.addPost(text);
}

    return (
        <div className={s.posts}>
            <input ref={newPostElement} placeholder="write..."></input>
            <button onClick={AddPost}>POST</button>
            {PostsElement}
        </div>
    );
}
export default Posts;