import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {PostsType} from "../Redux/State";

type ProfileProps = {
    posts: Array<PostsType>
    addNewPost: (addNewPost: string)=>void
}

const Profile = (props: ProfileProps)=>{
    return(
        <div>
           <ProfileInfo/>
          <MyPosts posts={props.posts} addNewPost={props.addNewPost}/>
        </div>
    )
}

export default Profile