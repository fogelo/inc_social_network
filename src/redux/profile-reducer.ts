import {v1} from 'uuid';

export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                post: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text
            return state;
    }

}