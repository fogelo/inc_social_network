import {getAuthUserData} from './auth-reducer';

const initState = {
    initialized: false
}

export const appReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}


const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'})

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
    // Promise.all([promise]).then(() => {
    //     dispatch(initializedSuccess())
    // })
}





