import {v1} from 'uuid';
import photo from '../img/user.png'

const initState = {
    users: [
    //     {
    //         id: v1(),
    //         fullName: 'Anton',
    //         status: 'i am a boss1',
    //         location: {city: 'Moscow', country: 'Russia'},
    //         followed: false,
    //         photoUrl: photo
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Ivan',
    //         status: 'i am a boss2',
    //         location: {city: 'Kiev', country: 'Ukraine'},
    //         followed: false,
    //         photoUrl: photo
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Artem',
    //         status: 'i am a boss3',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         followed: false,
    //         photoUrl: photo
    //     },
    ],
}

export const usersReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map((u: any) => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map((u: any) => u.id === action.id ? {...u, followed: false} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default: {
            return state
        }
    }

}

export const followAC = (id: any) => ({type: 'FOLLOW', id})
export const unfollowAC = (id: any) => ({type: 'UNFOLLOW', id})
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users})

