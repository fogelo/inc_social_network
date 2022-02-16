let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Я попал в инкубатор', likesCount: 12},
            {id: 2, post: 'Я выучил CSS', likesCount: 1},
            {id: 3, post: 'Я выучил JS', likesCount: 122},
            {id: 4, post: 'Я выучил React', likesCount: 312},
        ]
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
    }
}

export default state
