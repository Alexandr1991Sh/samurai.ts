import React from "react";

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

export type StoreType = {
    _state: RootStateType
    addNewPost: (postMessage: string) => void
    rerenderEntireTree: (_state: RootStateType) => void
    addNewMessage: (postMessage: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
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

    },
    rerenderEntireTree(_state: RootStateType) {
    },
    addNewPost(postMessage: string) {
        let newMessage: PostsType = {id: 5, message: postMessage, likesCount: 32}
        this._state.profilePage.posts.push(newMessage)
        this.rerenderEntireTree(this._state)
    },
    addNewMessage(postMessage: string) {
        let newMessage: MessagesType = {id: 4, message: postMessage}
        this._state.dialogsPage.messages.push(newMessage)
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer: (_state: RootStateType) => void) {
        this.rerenderEntireTree = observer
    },

    getState() {
        return this._state
    }
}

export default store


// const state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 11},
//             {id: 2, message: 'i am good', likesCount: 9}
//         ],
//     },
//
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Alexandr'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Slava'},
//             {id: 4, name: 'Viktor'}
//         ],
//
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Yo'}
//         ]
//     }
//
// }
// let rerenderEntireTree = (state: RootStateType) => {}
// export const subscribe = (observer: (state: RootStateType) => void) => {
//     rerenderEntireTree = observer
// }
// export const addNewPost = (postMessage: string) => {
//     let newMessage: PostsType = {id: 5, message: postMessage, likesCount: 32}
//     const newPosts = [newMessage, ...state.profilePage.posts]
//     state.profilePage.posts = newPosts
//     rerenderEntireTree(state)
// }

// export const addNewMessage = (postMessage: string) => {
//     let newMessage: MessagesType = {id: 4, message: postMessage}
//     const newPosts = [newMessage, ...state.dialogsPage.messages]
//     state.dialogsPage.messages = newPosts
//     rerenderEntireTree(state)
// }