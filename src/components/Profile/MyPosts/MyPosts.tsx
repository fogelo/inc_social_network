import React, {RefObject} from 'react';
import {Post} from './Post/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts = (props: ProfilePropsType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    function addPost() {
        props.dispatch({type: 'ADD-POST'})
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'UPDATE-NEW-TEXT', text: newPostElement.current.value})
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
            {props.profilePage.posts.map((item, index) => <Post post={props.profilePage.posts[index]}/>)}
        </div>
    );
}