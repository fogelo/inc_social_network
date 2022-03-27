import React from 'react';

import {DialogsPageType} from '../../App';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}


export const DialogsContainer = (props: any) => {
    const state = props.store.getState()
    const onMessageChange = (text: any) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }
    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}/>
};

