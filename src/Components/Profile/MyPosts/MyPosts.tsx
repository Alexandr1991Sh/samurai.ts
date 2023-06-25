import React, {useRef} from "react";
import Posts from "./Posts/Posts";
import s from './MyPosts.module.css'
import {PostsType} from "../../Redux/State";

type MyPostsProps = {
    posts: PostsType[]
    addNewPost: (addNewPost: string)=> void
}

const MyPosts = (props: MyPostsProps) => {
    const newPosts = props.posts.map(p => { return <Posts message={p.message} likesCount={p.likesCount}/>})

    const newPostElement = useRef() as any

    const addPost = () => {
        if(newPostElement.current) {
            props.addNewPost(newPostElement.current.value)
        }
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>

                    {newPosts}

                </div>
            </div>
        </div>
    )
}

export default MyPosts