import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';
import React from 'react';

export function rerenderEntireTree(){
    ReactDOM.render(
        <App state={state}  />,
        document.getElementById('root')
    );
}
