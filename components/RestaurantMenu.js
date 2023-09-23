import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG } from "./config";
import {Shimmer} from "./shimmer";


const RestaurantMenu = () => {
    const params = useParams();
    // how to read a dynamic URL params.
    const {id} = params;  //destructring id using params
    // console.log(params);
    const [Restaurant, setRestaurant] = useState({});

    useEffect(()=> {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.6930839&lng=74.2226414&restaurantId=" + id);
        const json = await data.json();
        console.log(json);
        // path of API "data?.cards[0]?.card?.card?.info"
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }

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





