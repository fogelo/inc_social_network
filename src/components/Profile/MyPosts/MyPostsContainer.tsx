import {addPostAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

function mapStateToProps(state: any) {
    return {
        posts: state.profilePage.posts,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        addPost(newPost: any) {
            dispatch(addPostAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)