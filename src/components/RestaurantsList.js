/*This component fetches the restaurant corresponding to restaurant id 
and displays content accordingly

Means jb click krte tb khulta yeh wala page ya component ( In simple Terms )

two things: useEffect() --> doing the async thing like fetch the data 
 another thing is : using a local state variable so that we can display that certain item
 like for e.g on the main page if we click on kfc then in kfc page what items should be displayed 
 it is taken care 


*/

/*
To clean up things a little bit , I just want to create a custom hook
remember hook is just a normal which will take out the logic things like api call and detail of 
restaurant 
*/

import { useParams } from "react-router-dom" 
import {imagesLink} from "/utils/config.js"
import Shummer from "./shummer";
import useRestaurant from "../../utils/useResaturant";
export function RestaurantsList(){
   let {resid} = useParams(); // take resid from url 
   // now correspondings to that resID it's opening the details of that restaurant
   let res = useRestaurant(resid); // now code looks clean & all unnecesaary calls are taken out from main side
   // we only care about res not how it's coming so just providing abstraction
   
   
   return res==null? <Shummer/>:(
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