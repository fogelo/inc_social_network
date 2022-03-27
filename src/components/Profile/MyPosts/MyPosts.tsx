import React, {RefObject} from 'react';
import {Post} from './Post/Post';
import {ProfilePropsType} from '../Profile';
import {addPostAC, updateNewPostTextAC} from '../../../redux/state';

export const MyPosts = (props: ProfilePropsType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    function addPost() {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value))
        }

    }

    return (
        <div>
            <div>My posts</div>
            <div style={{display: 'flex'}}>
                <textarea value={props.profilePage.newPostText}
                          onChange={onPostChange}
                          ref={newPostElement}/>
                <button onClick={addPost}>add post</button>
            </div>
            {props.profilePage.posts.map((item, index) => <Post key={item.id} post={props.profilePage.posts[index]}/>)}
        </div>
    );
}