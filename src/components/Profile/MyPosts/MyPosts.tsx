import React from 'react';
import {Post} from './Post/Post';


export const MyPosts = (props: any) => {
    function addPost() {
        props.addPost()
    }

    const onPostChange = (e: any) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <div>My posts</div>
            <div style={{display: 'flex'}}>
                <textarea value={props.newPostText}
                          onChange={onPostChange}/>
                <button onClick={addPost}>add post</button>
            </div>
            {props.posts.map((item: any, index: any) => <Post key={item.id} post={props.posts[index]}/>)}
        </div>
    );
}