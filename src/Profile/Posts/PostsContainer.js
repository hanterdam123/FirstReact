
import Posts from './Posts'
import {addPostActionCreator, updatePostActionCreator} from '../../Redux/ProfileReducer/ProfileReducer.js'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
    PostsElement: state.PostsInfo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newPost: () => {
            dispatch(addPostActionCreator())
        },
        onCgange: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;