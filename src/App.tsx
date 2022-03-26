import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

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
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <div className={'app'}><Header/>
                    <div className={'main-wrapper'}>
                        <Menu/>
                        <Routes>
                            <Route path="profile" element={<Profile profilePage={props.state.profilePage}
                                                                    addPost={props.addPost}
                                                                    updateNewPostText={props.updateNewPostText}
                            />}/>
                            {/*<Route path="/dialogs" element={<Dialogs/>}/>*/}
                            <Route path="dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
