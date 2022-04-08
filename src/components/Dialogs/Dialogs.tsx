import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {Navigate, NavLink} from 'react-router-dom';
import {DialogsPageType} from '../../App';
import {Field, reduxForm} from 'redux-form';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}


const AddMessageForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name={'newMessageText'} type={'text'}/>
                <button>add message</button>
            </form>
        </div>
    )
}

const ReduxAddMessgeForm = reduxForm({
    form: 'newMessage'
})(AddMessageForm)

const Dialogs = (props: any) => {

    const addMessage = (newMessage: any) => {
        props.addMessage(newMessage.newMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 10px 0 10px'}}>
                <div>
                    {props.dialogs.map((u: any) => <NavLink key={u.id} className={style.link}
                                                            to={'/dialogs/' + u.id}>{u.name}</NavLink>)}
                </div>
                <div>
                    {props.messages.map((m: any) => <div key={m.id}>{m.message}</div>)}
                </div>
            </div>

            {/*<div style={{display: 'flex', padding: '0 10px 0 10px'}}>*/}
            {/*    <textarea value={props.newMessageText}*/}
            {/*              onChange={onMessageChange}/>*/}
            {/*    <button onClick={addMessage}>add message</button>*/}
            {/*</div>*/}
            <ReduxAddMessgeForm onSubmit={addMessage}/>
        </div>
    );
};


export default Dialogs;