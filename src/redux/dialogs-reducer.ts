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
    newMessageText: ''
}

export const dialogsReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.text
            };
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
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

export const updateNewMessageTextAC = (text: any) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', text: text})

export const addMessageAC = () => ({type: 'ADD-MESSAGE'})