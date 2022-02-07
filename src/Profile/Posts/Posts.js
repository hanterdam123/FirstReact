import React from 'react';
import { reduxForm , Field} from 'redux-form';
import s from './Posts.module.css';
import Write from './Write/Write.js'
import { requiredField, maxLengthCreator } from '../../validators/validators';
import { Textarea } from '../../validators/FormsControl';

let maxLength10 = maxLengthCreator(10)

const Posts = React.memo(props => {

    console.log('ll')
    let PostsElement = props.PostsElement.map(p => <Write message={p.message} like={p.like} dislike={p.dislike} id={p.id} name={p.name} photo={p.photo} key={p.id}/>)
    let value = props.Value

    let newPost = (values) => {
        props.newPost(values.newPost)
    }

    const ProfileForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}> 
                <Field component={Textarea} name={'newPost'} validate={[requiredField, maxLength10]}></Field>
                <button>POST</button>
            </form>
        )
    }
    
    const ProfileReduxForm = reduxForm({form:'post'})(ProfileForm)

    return (
        <div className={s.posts}>
            <ProfileReduxForm onSubmit={newPost}/>
            {PostsElement}
        </div>
    )

})


export default Posts;