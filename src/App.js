

import React, { Suspense, lazy, useState } from "react";
import  ReactDOM  from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/body";
import Footer from "./components/footer";
// import { Aboutus } from "./components/About";
import {createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import Error from "./Error";
import { Contact } from "./components/Contact";
import { RestaurantsList } from "./components/RestaurantsList";
import { Profile } from "./components/Profile";
import Shummer from "./components/shummer";
import SuperMart from "./components/SuperMart";
import UserContext from "/utils/UserContext.js";
import { useContext } from "react";

const Aboutus = lazy(()=>import("./components/About")); 

function AppLayout() {

    const [user, setUser] =useState({
        name:"Anmol",
        email:"anmoldogra@gmail.com"
    })

    return (
        <>
        <UserContext.Provider value ={{
            user: user,
            setUser:setUser
        }}>
            <Header /> {/* I want this to display on all pages */}
            <Outlet /> {/*This should change according to all things  */}
            <Footer />
        </UserContext.Provider>
        </>
    );
}

const appRouter = createBrowserRouter([{ 
path:"/",
element:<AppLayout/>,
errorElement:<Error/>,
children:[{
    path:"/About",
    element:<Suspense fallback= {<Shummer/>} ><Aboutus/></Suspense>,
    children:[
        {
            path:"profile",
            element:<Profile/>,
        },
    ]
},{
    path:"/contact",
    element:<Contact/>
},{
    path:"/",
    element:<Body/>
},{
    path:"/supermart",
    element:<SuperMart/>
},
{
    // Dynamic routing  --> swiggy m restaurants jo show hote click krke new page pe paunch jaate 
    // toh wahan pe same picge wala baaki id k basis pe distinguish 
    path:"/restaurants/:resid",
    element:<RestaurantsList/>
}]

}])

const rootEle =document.getElementById("root")
const root = ReactDOM.createRoot(rootEle);
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)