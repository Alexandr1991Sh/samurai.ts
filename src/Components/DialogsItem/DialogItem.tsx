import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/Dialogs/' + props.id
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                  <NavLink to={path}>{props.name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default DialogItem