//custom hook for details of restaurant using the resid from url 
// takes resId and gives the detail of restaurant

import { useState } from "react";
import { useEffect } from "react";
const useRestaurant =(resid)=>{

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
       return res;
}
export default useRestaurant;