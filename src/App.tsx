import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    newMessageText: string;
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type AppPropsType = {
    state: StateType
    dispatch: any
}

function App(props: AppPropsType) {
    return (
        <div className={'app'}>
            <Header/>
            <div className={'main-wrapper'}>
                <Menu/>
                <div className={'content'}>
                    <Routes>
                        <Route path="profile" element={<Profile profilePage={props.state.profilePage}
                                                                dispatch={props.dispatch}

                        />}/>
                        {/*<Route path="/dialogs" element={<Dialogs/>}/>*/}
                        <Route path="dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
