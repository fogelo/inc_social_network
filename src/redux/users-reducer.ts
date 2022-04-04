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
        case 'FOLLOW': {
            return {...state, users: state.users.map((u: any) => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map((u: any) => u.id === action.id ? {...u, followed: false} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'TOGGLE-IS-FETCHED': {
            return {...state, isFetched: action.isFetched}
        }
        case 'TOGGLE-FOLLOWING-PROGRESS': {
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

export const followSuccess = (id: any) => ({type: 'FOLLOW', id})
export const unfollowSuccess = (id: any) => ({type: 'UNFOLLOW', id})
export const setUsers = (users: any) => ({type: 'SET-USERS', users})

export const setCurrentPage = (currentPage: any) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalUsersCount = (totalUsersCount: any) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount})

export const toggleIsFetched = (isFetched: any) => ({type: 'TOGGLE-IS-FETCHED', isFetched})

export const toggleFollowingProgress = (userId: any) => ({type: 'TOGGLE-FOLLOWING-PROGRESS', userId})

export const getUsers = (currentPage: any, usersCount: any) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetched(true))
        usersAPI.getUsers(currentPage, usersCount).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetched(false))
        })

    }
}
export const follow = (userId: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(userId))
        })
    }
}
export const unfollow = (userId: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(userId))
        })
    }
}

