import { Outlet } from "react-router-dom"

import ProfileClass from "./ProfileClass"
import { Profile } from "./Profile"
export let Aboutus =()=>{
    return(
        <>
        <h1>THIS IS ABOUT US PAGE</h1>
        <ProfileClass name="Class wala hai yeh"/>
        <Profile/>
        <Outlet/>
        </>
    )
}

/*  What I want is inside About us there is another component name Profile */