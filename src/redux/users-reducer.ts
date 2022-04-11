import {usersAPI} from '../api/api';

const initState = {
    users: [],
    totalUsersCount: 0,
    usersCount: 5,
    currentPage: 1,
    isFetched: true,
    followingInProgress: []
}

export const usersReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'users/FOLLOW': {
            return {...state, users: state.users.map((u: any) => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'users/UNFOLLOW': {
            return {...state, users: state.users.map((u: any) => u.id === action.id ? {...u, followed: false} : u)}
        }
        case 'users/SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'users/SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'users/SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'users/TOGGLE-IS-FETCHED': {
            return {...state, isFetched: action.isFetched}
        }
        case 'users/TOGGLE-FOLLOWING-PROGRESS': {
            return {
                ...state, followingInProgress: state.followingInProgress.some((id: any) => id === action.userId)
                    ? state.followingInProgress.filter((id: any) => id !== action.userId)
                    : [...state.followingInProgress, action.userId]
            }
        }
        default: {
            return state
        }
    }

}

export const followSuccess = (id: any) => ({type: 'users/FOLLOW', id})
export const unfollowSuccess = (id: any) => ({type: 'users/UNFOLLOW', id})
export const setUsers = (users: any) => ({type: 'users/SET-USERS', users})

export const setCurrentPage = (currentPage: any) => ({type: 'users/SET-CURRENT-PAGE', currentPage})
export const setTotalUsersCount = (totalUsersCount: any) => ({type: 'users/SET-TOTAL-USERS-COUNT', totalUsersCount})

export const toggleIsFetched = (isFetched: any) => ({type: 'users/TOGGLE-IS-FETCHED', isFetched})

export const toggleFollowingProgress = (userId: any) => ({type: 'users/TOGGLE-FOLLOWING-PROGRESS', userId})

export const requestUsers = (currentPage: any, usersCount: any) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetched(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, usersCount).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetched(false))
        })

    }
}


const followUnfollow = (dispatch: any, userId: any, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(userId))
    apiMethod(userId).then((response: any) => {
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(userId))
    })
}

export const follow = (userId: any) => {
    return (dispatch: any) => {
        followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), unfollowSuccess)
    }
}
export const unfollow = (userId: any) => {
    return (dispatch: any) => {
        followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), followSuccess)
    }
}

