import React from "react";
import {imagesLink} from "/utils/config.js"
const Card=({restaurant})=>{
    // console.log(restaurant)
    return (
     <div className="main-card">
        <div className="shadow-md ">
        <img  src = {imagesLink +
        restaurant?.info?.cloudinaryImageId 
        } alt=""
        />
        <div className="card-content">
        <h3>{restaurant?.info?.name}</h3> 
        <h3>{restaurant?.info?.avgRating}</h3>
        </div>
        </div>
    </div> 
    )
}
export default Card;