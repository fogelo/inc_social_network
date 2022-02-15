import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let postData = [
    {id: 1, post: 'Я попал в инкубатор', likesCount: 12},
    {id: 2, post: 'Я выучил CSS', likesCount: 1},
    {id: 3, post: 'Я выучил JS', likesCount: 122},
    {id: 4, post: 'Я выучил React', likesCount: 312},
]
export let dialogsData = [
    {id: 1, name: 'user1'},
    {id: 2, name: 'user2'},
    {id: 3, name: 'user3'},
    {id: 4, name: 'user4'},
    {id: 5, name: 'user5'},
]

export let messagesData = [
    {id: 1, message: 'how are you?'},
    {id: 2, message: 'i am fine'},
    {id: 3, message: 'and you?'},
]

ReactDOM.render(
    <App posts={postData} dialogs={dialogsData} messages={messagesData} />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
