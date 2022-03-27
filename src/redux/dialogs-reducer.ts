import {v1} from 'uuid';

export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.text
            return state;
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
    }
    return state
}