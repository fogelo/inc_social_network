const initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}


export const setAuthUserData = (userId: any, email: any, login: any) => ({
    type: 'SET-AUTH-USER-DATA',
    userId,
    email,
    login
})