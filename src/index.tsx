import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./components/redux/redux-store";
import {Provider} from "react-redux";

export type dialogType = {
    id: number
    name: string

}
export type messageType = {
    id: number
    message: string
}

export type postType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: Array<postType>
    newPostText: string
}

export type dialogsPageType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMessageText: string
}
/*
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
*/

/*
export type storeType = {
    store: stateType
    _callSubscriber: any
    subscribe: (observer: any) => void
    dispatch: any
}
*/


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
