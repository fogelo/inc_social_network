import {v1} from 'uuid';
import {usersAPI} from '../api/api';

const initState = {
    posts: [
        {id: '1', post: 'Я попал в инкубатор', likesCount: 12},
        {id: '2', post: 'Я выучил CSS', likesCount: 1},
        {id: '3', post: 'Я выучил JS', likesCount: 122},
        {id: '4', post: 'Я выучил React', likesCount: 312},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                post: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default: {
            return state
        }
    }

}

export const addPostAC = () => ({type: 'ADD-POST'})

export const updateNewPostTextAC = (text: any) => ({type: 'UPDATE-NEW-POST-TEXT', text: text})

export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile})

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}