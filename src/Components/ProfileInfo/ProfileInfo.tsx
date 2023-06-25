import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = ()=>{
    return(
        <div>
            <div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckesZ1JqeQ1cr4rubOQXKm9s-jELBiUToeQ&usqp=CAU'}/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo