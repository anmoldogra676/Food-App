import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "/utils/useOnline";



const MainLogo=function(){
    return (
        <img className="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4AawRmqv3WJwO8RPtKUAjSQ6YgR5GUKrXw&usqp=CAU"></img>
);
    };

    
export const Header=()=> {
    let[loggedin, setLogged] = useState(true)
    let isOnline = useOnline();
    return (
        <div className ="header-section">
            <MainLogo/>
            <div className="nav-items">
                <ul>
                <li>{isOnline?"🧑‍💻":"😌"}</li>
                   <li ><Link to="/">Home </Link></li>
                   <li ><Link to="/contact">Contact </Link></li>
                   <li ><Link to="/about">About us </Link></li>
                   {
                    loggedin?(<button onClick={()=>{
                        setLogged(false)
                    }}>LogOut</button>):(<button onClick={()=>{
                        setLogged(true)
                    }}>Login</button>)
                   }
                </ul>
            </div>
        </div>
    );
    };