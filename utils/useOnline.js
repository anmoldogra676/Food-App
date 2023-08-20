import { useEffect, useState } from "react";

const useOnline =()=>{
 let [isOnline,setIsOnline]= useState(true)

 function helper1(){
    setIsOnline(true);
    console.log("Yes it's online")
 }

 function helper2(){
    console.log("Yes it's offline")
    setIsOnline(false);
 }

 useEffect(()=>{
    window.addEventListener("online",helper1);
 })

 useEffect(()=>{
    window.addEventListener("offline",helper2);
 })

   return isOnline;
}
export default useOnline;