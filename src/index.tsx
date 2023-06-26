import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Components/Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {addNewMessage, addNewPost, RootStateType} from "./Components/Redux/State";
import App from "./App";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root') as HTMLElement
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
