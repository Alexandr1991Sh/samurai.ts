import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {addNewMessage, addNewPost, RootStateType} from "./Components/Redux/State";
import App from "./App";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
    document.getElementById('root') as HTMLElement
    );
}


