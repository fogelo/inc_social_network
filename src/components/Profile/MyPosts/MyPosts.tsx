import React, {RefObject} from 'react';
import {Post} from './Post/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts = (props: ProfilePropsType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    function addPost() {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }

    }

    return (
        <div>
            <div>My posts</div>
            <textarea ref={newPostElement}/>
            <button onClick={addPost}>add post</button>
            {props.state.posts.map((item, index) => <Post post={props.state.posts[index]}/>)}
        </div>
    );
}