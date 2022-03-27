import {v1} from 'uuid';

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                post: this.state.profilePage.newPostText,
                likesCount: 0
            }
            this.state.profilePage.posts.push(newPost)
            this.state.profilePage.newPostText = ''
            this._callSubscriber(this.state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.state.profilePage.newPostText = action.text
            this._callSubscriber(this.state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this.state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this.state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: v1(),
                message: this.state.dialogsPage.newMessageText,
            }
            this.state.dialogsPage.messages.push(newMessage)
            this.state.dialogsPage.newMessageText = ''
            this._callSubscriber(this.state)
        }
    }
}


export const addPostAC = () => ({type: 'ADD-POST'})

export const updateNewPostTextAC = (text: any) => ({type: 'UPDATE-NEW-POST-TEXT', text: text})

export const updateNewMessageTextAC = (text: any) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', text: text})

export const addMessageAC = () => ({type: 'ADD-MESSAGE'})
