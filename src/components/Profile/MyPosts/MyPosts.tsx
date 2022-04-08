import React from 'react';
import {Post} from './Post/Post';
import {Field, reduxForm} from 'redux-form';


const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} style={{display: 'flex'}}>
            <Field component={'textarea'} name={'newPostTextArea'} type={'text'}/>
            <button>add post</button>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({
    form: 'newPostTextArea'
})(AddPostForm)

export const MyPosts = (props: any) => {
    function addPost(newPost: any) {
        props.addPost(newPost.newPostTextArea)
    }
    return (
        <div>
            <div>My posts</div>
                {/*<textarea value={props.newPostText}*/}
                {/*          onChange={onPostChange}/>*/}
                {/*<button onClick={addPost}>add post</button>*/}
                <ReduxAddPostForm onSubmit={addPost}/>
            {props.posts.map((item: any, index: any) => <Post key={item.id} post={props.posts[index]}/>)}
        </div>
    )
}

