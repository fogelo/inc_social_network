import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

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


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: 'SET-AUTH-USER-DATA',
    userId,
    email,
    login
})
export const getAuthUserData = () => (dispatch: any) => {
    return authAPI.me().then(response => {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login))
    })
}


export const login = (email: any, password: any, rememberMe: any) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : ''
            const action = stopSubmit('login', {_error: errorMessage})
            dispatch(action)
        }
    })
}
export const logout = () => (dispatch: any) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null))
        }
    })
}


