import React, {RefObject} from 'react';
import {Post} from './Post/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts = (props: ProfilePropsType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    function addPost() {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    const onChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div>
            <div>My posts</div>
            <textarea value={props.profilePage.newPostText}
                      onChange={onChange}
                      ref={newPostElement}/>
            <button onClick={addPost}>add post</button>
            {props.profilePage.posts.map((item, index) => <Post post={props.profilePage.posts[index]}/>)}
        </div>
    );
}