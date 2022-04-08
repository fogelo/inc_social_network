import {v1} from 'uuid';

const initState = {
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
}

export const dialogsReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(),
                message: action.newMessage,
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            };
        default: {
            return state
        }
    }
}

export const addMessageAC = (newMessage: any) => ({type: 'ADD-MESSAGE', newMessage})