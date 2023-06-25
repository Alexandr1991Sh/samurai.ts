import React from "react";
import {rerenderEntireTree} from "../../render";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'i am good', likesCount: 9}
        ],
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alexandr'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Slava'},
            {id: 4, name: 'Viktor'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'}
        ]
    }

}

export const addNewPost = (postMessage: string) => {
    let newMessage: PostsType = {id: 5, message: postMessage, likesCount: 32}
    state.profilePage.posts.push(newMessage)
rerenderEntireTree(state)
}

export const addNewMessage = (postMessage: string)=>{
    let newMessage: MessagesType = {id: 4, message: postMessage}
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state)
}


export default state