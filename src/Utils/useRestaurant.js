import { useState, useEffect } from "react";
import { fetch_menu_url } from "../components/config";

const useRestaurant = (id) => {
    const [Restaurant, setRestaurant] = useState({});
    //Get data from API
    useEffect(()=> {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const data = await fetch(fetch_menu_url + id);
        const json = await data.json();
        // console.log(json);
        // path of API "data?.cards[0]?.card?.card?.info"
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }
    // return restaurant data;
    return Restaurant;
};

export default useRestaurant;