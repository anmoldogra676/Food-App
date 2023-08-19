import { useEffect, useState } from "react"
// import { mainApi } from "./config"
import { imagesLink } from "./config"
import Shummer from "./shummer";
import { Link } from "react-router-dom";


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
    let [allRestaurent, setAllRestaurant] = useState(null);
    let [searchText ,setSearchText] = useState(null);
    let [filterrestaurants , setfilterRestaurant] = useState(null) //restaurants

    // api se data fill kiya 2 values m
    useEffect( ()=>{
        // callback
        getRestaurants();
     } ,[]) // --> if empty array means only one time after initial renders

    async function getRestaurants(){
        console.log("api call")
        let link = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let json = await link.json();

        let newdata =json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(newdata[0]?.info?.name)
        setfilterRestaurant(newdata) 
        setAllRestaurant(newdata)

  
   
    }
  

    return (
        <>
        <div className="Search-container">
        <input type="text" className="textInput" placeholder= "Search Anything" value ={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value)
        }
    }/>
    
        <button className="Search-Items" onClick={()=>{
            const data =filterData(allRestaurent, searchText); //  used for search restaurant
            // console.log(data)
            setfilterRestaurant(data) //update state
        }} >Search</button>
        </div>

        {
        (!allRestaurent)?(<Shummer/>):(
        <div className="main-body">
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
        </>
    )
}
const Card=({restaurant})=>{
    // console.log(restaurant)
    return (
     <div className="main-card">
        <img  src = {imagesLink +
        restaurant?.info?.cloudinaryImageId 
        } alt=""
        />
        <div className="card-content">
        <h3>{restaurant?.info?.name}</h3> 
        <h3>{restaurant?.info?.avgRating}</h3>
        </div>
    </div> 
        
    )
}