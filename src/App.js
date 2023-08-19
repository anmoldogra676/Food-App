

import React from "react";
import  ReactDOM  from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/body";
import Footer from "./components/footer";
import { Aboutus } from "./components/About";
import {createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import Error from "./Error";
import { Contact } from "./components/Contact";
import { RestaurantsList } from "./components/RestaurantsList";
import { Profile } from "./components/Profile";


/*
FOOD APP
Header Component  ---> LOGO AND MENU ITEMS
Body Component 
Footer Component
*/

const AppLayout=()=> {
    return (
        <>
            <Header /> {/* I want this to display on all pages */ }
            <Outlet/> {/*This should change according to all things  */ }
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([{ 
path:"/",
element:<AppLayout/>,
errorElement:<Error/>,
children:[{
    path:"/About",
    element:<Aboutus/>,
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