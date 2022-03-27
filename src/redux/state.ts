export const store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Я попал в инкубатор', likesCount: 12},
                {id: 2, post: 'Я выучил CSS', likesCount: 1},
                {id: 3, post: 'Я выучил JS', likesCount: 122},
                {id: 4, post: 'Я выучил React', likesCount: 312},
            ],
            newPostText: 'hard'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'user1'},
                {id: 2, name: 'user2'},
                {id: 3, name: 'user3'},
                {id: 4, name: 'user4'},
                {id: 5, name: 'user5'},
            ],
            messages: [
                {id: 1, message: 'how are you?'},
                {id: 2, message: 'i am fine'},
                {id: 3, message: 'and you?'},
            ],
        },
    },
    getState() {
        return this.state
    },
    _callSubscriber(state: any) {
        console.log('я есть заглушка')
    },

    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this.state.profilePage.newPostText,
                likesCount: 0
            }
            this.state.profilePage.posts.push(newPost)
            this.state.profilePage.newPostText = ''
            this._callSubscriber(this.state)
        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this.state.profilePage.newPostText = action.text
            this._callSubscriber(this.state)
        }
    }
}





