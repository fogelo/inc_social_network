import React from 'react';
import {DialogsPageType} from '../../App';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}

function mapStateToProps(state: any) {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        updateNewMessageText: (text: any) => {
            dispatch(updateNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
