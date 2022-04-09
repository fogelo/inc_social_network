import React from 'react';
import './App.css';
import {Menu} from './components/Menu/Menu';
import {Route, Routes, useMatch} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader';

// const withRouter = (Component: any) => {
//     const ComponentContainer = (props: any) => {
//         const match = useMatch('/profile/:id')
//         return <Component {...props} id={match ? match.params.id : '23196'}/>
//     }
//     return ComponentContainer
// }

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

class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'app'}>
                <HeaderContainer/>
                <div className={'main-wrapper'}>
                    <Menu/>
                    <div className={'content'}>
                        <Routes>
                            <Route path="profile/*" element={<ProfileContainer/>}/>
                            <Route path="/" element={<ProfileContainer/>}/>
                            <Route path="profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="users/*" element={<UsersContainer/>}/>
                            <Route path="login" element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        initialized: state.app.initialized
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        initializeApp: () => {
            dispatch(initializeApp())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
