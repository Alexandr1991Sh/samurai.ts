import React from "react";
import s from './Messages.module.css'
import {MessagesType} from "../Redux/State";

type MessagesProps = {
    message: string
    id:number
}

const Messages = (props: MessagesProps) => {
    return (
        <div>
            <div className={s.messages}>
                <div className={s.message}>{props.message}</div>
            </div>
        </div>
    )
}

export default Messages