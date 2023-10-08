import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG } from "./config";
import {Shimmer} from "./shimmer";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
    const params = useParams();
    // how to read a dynamic URL params.
    const {id} = params;  //destructring id using params
    // console.log(params);
    // const [Restaurant, setRestaurant] = useState({});
    const Restaurant = useRestaurant(id);
    //Shimmer not workinh below
    return (!Restaurant) ? <Shimmer /> : 
        ( 
        <div>
            <h1> Restaurant Id : {id}</h1>
            <h2> {Restaurant?.name}</h2>
            <img src={IMG + Restaurant.cloudinaryImageId} />
            <h3> {Restaurant?.city}</h3>
            <h3> {Restaurant?.cuisines?.join(",")}</h3>
            <h3> {Restaurant?.costForTwo}</h3>
            <h3> {Restaurant?.avgRating}</h3>
           </div>
     
        )
    }

export default RestaurantMenu;





