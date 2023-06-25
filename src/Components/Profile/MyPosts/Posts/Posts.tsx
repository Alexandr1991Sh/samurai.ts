import React from "react";
import s from './Posts.module.css'
import {MessagesType} from "../../../Redux/State";

type PostsProps = {
    message: string
    likesCount: number
}

const Posts = (props: PostsProps)=>{
    return(
        <div className={s.item}>
                <img alt={''} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53Y7PzUEawis7VUgB5IIoP16my0F7OxeJDg&usqp=CAU'}/>
            {props.message}
            <div>
                <span>Like </span>  {props.likesCount}
            </div>
        </div>
    )
}

export default Posts