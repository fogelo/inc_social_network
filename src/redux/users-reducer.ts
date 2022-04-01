const initState = {
    users: [],
    totalUsersCount: 0,
    usersCount: 5,
    currentPage: 1,
    isFetched: true
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
        default: {
            return state
        }
    }

}

export const follow = (id: any) => ({type: 'FOLLOW', id})
export const unfollow = (id: any) => ({type: 'UNFOLLOW', id})
export const setUsers = (users: any) => ({type: 'SET-USERS', users})

export const setCurrentPage = (currentPage: any) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalUsersCount = (totalUsersCount: any) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount})

export const toggleIsFetched = (isFetched: any) => ({type: 'TOGGLE-IS-FETCHED', isFetched})

