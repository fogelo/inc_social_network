import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

export const store = {
    state: {
        profilePage: {
            posts: [
                {id: '1', post: 'Я попал в инкубатор', likesCount: 12},
                {id: '2', post: 'Я выучил CSS', likesCount: 1},
                {id: '3', post: 'Я выучил JS', likesCount: 122},
                {id: '4', post: 'Я выучил React', likesCount: 312},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'user1'},
                {id: '2', name: 'user2'},
                {id: '3', name: 'user3'},
                {id: '4', name: 'user4'},
                {id: '5', name: 'user5'},
            ],
            messages: [
                {id: '1', message: 'how are you?'},
                {id: '2', message: 'i am fine'},
                {id: '3', message: 'and you?'},
            ],
            newMessageText: ''
        },
    },
    getState() {
        return this.state
    },
    _callSubscriber(state: any) {
        console.log('я есть заглушка', state)
    },

    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
        this._callSubscriber(this.state)
    }
}





