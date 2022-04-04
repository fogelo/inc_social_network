import React from 'react';
import {DialogsPageType} from '../../App';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {Profile} from '../Profile/Profile';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}

function mapStateToProps(state: any) {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        login: state.auth.login
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
