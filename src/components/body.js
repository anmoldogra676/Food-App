import { useEffect, useState } from "react"
// import { mainApi } from "./config"
import Shummer from "./shummer";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import Card from "./Card";
import { useContext } from "react";
import UserContext from "/utils/UserContext.js"


// return list of searched restaurant
function filterData(restaurant, search){
{
     const data =restaurant.filter((list)=>{
        return list.info.name.toLowerCase().includes(search.toLowerCase())
     });
      console.log(data)
      return data;
    }
}



export const Body =()=>{

    let [allRestaurent, setAllRestaurant] = useState(null); // set of all the Restaurant
    let [searchText ,setSearchText] = useState(null);
    let [filterrestaurants , setfilterRestaurant] = useState(null) //we would update restaurants
    let {user,setUser} = useContext(UserContext)

    // api se data fill kiya 2 values m
    useEffect( ()=>{
        // callback
        getRestaurants();
     } ,[]) // --> if empty array means only one time after initial renders

    async function getRestaurants(){
        console.log("api call")
        let link = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let json = await link.json();

        let newdata =json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(newdata[0]?.info?.name)
        setfilterRestaurant(newdata) 
        setAllRestaurant(newdata)
   
    }
    let isOnline = useOnline(); // check internet in on or not
    if(isOnline==false){
       return <h2>Internet is not there</h2>
    }

    return (
        <div className="bg-slate-100 ">
        {/* Search Container */}
        <div className="Search-container my-2 p-2 flex space-x-4">
        <input type="text" className="textInput" placeholder= "Search Anything" value ={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value)
        }
    }/>
     
     {/* This would filter or set the restuarant according to whatever being searched */}
        <button className="Search-Items bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded" onClick={()=>{
            const data =filterData(allRestaurent, searchText); //  used for search restaurant & search hmesa global wale se
            // and update filter wale ko 
            // console.log(data)
            setfilterRestaurant(data) //update state
        }} >Search</button>



        {
        // just to use the context   ---> based upon change in input tag value , change the context 
        /* <input value={user.name } onChange={(e)=>{
            setUser({
                name: e.target.value,
                email: user.email
            }
            )
        }} ></input> */}
       
        </div>
        
        {/* all restaurant means API se data aaya nhi toh simple show the shummer 
        otherwise show the restaurants about what being searched */}
        {
        (!allRestaurent)?(<Shummer/>):(
        <div className="main-body flex flex-wrap gap-8 m-3 p-2 shadow-sm bg-slate-100">
               { 
              filterrestaurants.map((restaurantList, index)=>{
                    // console.log(restaurantList)
                   return (
                    <Link to={"/restaurants/"+ restaurantList?.info?.id} key={restaurantList?.info?.id}>
                    <Card  restaurant={restaurantList} key={restaurantList?.info?.id} />
                    </Link>
                    )

                })
              
            }
            
        
        
            {/* This is the another way like hardcoding the different values */}
        {/* <Card restaurant={mainApi[0] } hello ="world" name="I don't know" /> */}
        {/* <Card restaurant={mainApi[1]}/> */}
        {/* <Card restaurant={mainApi[2]}/> */}
        {/* <Card restaurant={mainApi[3]}/> */}
        {/* <Card restaurant={mainApi[4]}/> */}
        
        </div>
    )
        }
        </div>
    )
}
        
 