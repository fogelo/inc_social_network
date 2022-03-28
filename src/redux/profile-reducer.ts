import {v1} from 'uuid';

const initState = {
    posts: [
        {id: '1', post: 'Я попал в инкубатор', likesCount: 12},
        {id: '2', post: 'Я выучил CSS', likesCount: 1},
        {id: '3', post: 'Я выучил JS', likesCount: 122},
        {id: '4', post: 'Я выучил React', likesCount: 312},
    ],
    newPostText: ''
}

export const profileReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                post: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy;
        }
        default: {
            return state
        }
    }

}

export const addPostAC = () => ({type: 'ADD-POST'})

export const updateNewPostTextAC = (text: any) => ({type: 'UPDATE-NEW-POST-TEXT', text: text})