/*This component fetches the restaurant corresponding to restaurant id 
and displays content accordingly

two things: useEffect() --> doing the async thing like fetch the data 
 another thing is : using a local state variable so that we can display that certain item
 like for e.g on the main page if we click on kfc then in kfc page what items should be displayed 
 it is taken care 


*/

/*
To clean up things a little bit , I just want to create a custom hook
remember hook is just a normal 
*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { imagesLink } from "./config";
import Shummer from "./shummer";
export function RestaurantsList(){
   let {resid} = useParams();
   let [res, setRes] = useState(null);

   useEffect(()=>{
    getRestaurants();
   },[])
   async function getRestaurants(){
      let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.396252177431624&lng=77.03620590269566&restaurantId="+resid);
      const json = await data.json();
      let newdata = json?.data?.cards[0]?.card?.card?.info;
      console.log(newdata);
      setRes(newdata)
   }
   

   return(
      <>
      <h2>Main Page</h2>
      <h2>Restaurant Id : {res?.id}</h2>
      <h2>Restaurant Name: {res?.name}</h2>
      <img src = {imagesLink + res?.cloudinaryImageId}></img>
      <h2>Restaurant city : {res?.city}</h2>
      <h2>Restaurant areaName : {res?.areaName}</h2>
      <h2>Restaurant cuisines : {res?.cuisines.join(", ")}</h2>

      
      <h2>{res?.data?.statusMessage}</h2>
      </>
    )
}