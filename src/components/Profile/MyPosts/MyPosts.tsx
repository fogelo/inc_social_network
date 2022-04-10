import React from 'react';
import {Post} from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLength, requiredField} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls';

const maxLength15 = maxLength(15)
const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newPostTextArea'}
                   type={'text'}
                   validate={[requiredField, maxLength15]}/>
            <button>add post</button>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({
    form: 'newPostTextArea'
})(AddPostForm)

export function MyPosts(props: any) {
    const addPost = (newPost: any) => {
        props.addPost(newPost.newPostTextArea)
    }

    console.log('RENDER')
    return (
        <div>
            <div>My posts</div>
            <ReduxAddPostForm onSubmit={addPost}/>
            {props.posts.map((item: any, index: any) => <Post key={item.id} post={props.posts[index]}/>)}
        </div>
    )
}

