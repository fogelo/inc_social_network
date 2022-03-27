import React from 'react';

import {DialogsPageType} from '../../App';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../index';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}

export const DialogsContainer = (props: any) => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
                    const state = store.getState()
                    const onMessageChange = (text: any) => {
                        store.dispatch(updateNewMessageTextAC(text))
                    }
                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    return <Dialogs updateNewMessageText={onMessageChange}
                                    addMessage={addMessage}
                                    dialogs={state.dialogsPage.dialogs}
                                    messages={state.dialogsPage.messages}
                                    newMessageText={state.dialogsPage.newMessageText}/>
                }
            }
        </StoreContext.Consumer>
    )
};

