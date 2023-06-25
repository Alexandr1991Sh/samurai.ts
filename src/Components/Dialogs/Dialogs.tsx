import React, {useRef} from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages";
import DialogItem from "../DialogsItem/DialogItem";
import {DialogsType, MessagesType} from "../Redux/State";

type DialogsProps = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    addNewMessage: (addNewMessage: string) => void
}

const Dialogs = (props: DialogsProps) => {

    const dialogsElements = props.dialogs.map(d => {
        return <DialogItem id={d.id} key={d.id} name={d.name}/>
    })
    const messagesElements = props.messages.map(m => {
        return <Messages id={m.id} key={m.id} message={m.message}/>
    })

    const newPostElement = useRef() as any

    const addPost = () => {
        if (newPostElement.current) {
            props.addNewMessage(newPostElement.current.value)
        }
        newPostElement.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>

            <div className={s.posts}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs