import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "/utils/useOnline";



const MainLogo=function(){
    return (
        <div>
        <img className="Logo h-10 w-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4AawRmqv3WJwO8RPtKUAjSQ6YgR5GUKrXw&usqp=CAU"></img>
        </div>
);
    };

    
export const Header=()=> {
    let[loggedin, setLogged] = useState(true)
    let isOnline = useOnline();
    return (<>
         
        <div className =" header-section flex bg-slate-300 items-center py-4 px-2 justify-center shadow-lg">
        <MainLogo/>
            <div className="nav-items ml-4  ">
                <ul className="flex">
                   <li className="px-2">{isOnline?"🧑‍💻":"😌"}</li>
                   <li className="px-2"><Link to="/">Home </Link></li>
                   <li className="px-2" ><Link to="/contact">Contact </Link></li>
                   <li className="px-2"><Link to="/about">About us </Link></li>
                   <li > 
                   {
                    loggedin?(<button onClick={()=>{
                        setLogged(false)
                    }}>LogOut</button>):(<button onClick={()=>{
                        setLogged(true)
                    }}>Login</button>)
                   }
                   </li>

                </ul>
            </div>
        </div>
        </>
    );
    };