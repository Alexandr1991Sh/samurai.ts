import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import {RootStateType} from "./Components/Redux/State";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Navbar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";

type PropsType  = {
    state:RootStateType
    addNewPost: (addNewPost: string)=>void
    addNewMessage: (addNewMessage: string)=>void
}
function App(props: PropsType) {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                    <Route path='/Profile/' render={()=><Profile posts={props.state.profilePage.posts} addNewPost={props.addNewPost}/>}/>
                    <Route path='/Dialogs/' render={()=><Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
                        addNewMessage={props.addNewMessage}
                    />}/>
                    <Route path='/News/' render={()=><News />}/>
                    <Route path='/Music/' render={()=><Music />}/>
                    <Route path='/Settings/' render={()=><Settings />}/>

            </div>
        </div>

    );
}

export default App



