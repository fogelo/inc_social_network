import React from 'react';
import {DialogsPageType} from '../../App';
import {addMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}

function mapStateToProps(state: any) {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        login: state.auth.login
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        addMessage: (newMessage: any) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
