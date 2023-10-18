import  { RestrauntList }  from "./config";
import  RestrauntCard  from "./RestaurantCard";
import { useState, useEffect } from "react"; //1.07.11 hooks
import Shimmer from "./shimmer.js";  //shimmer Ui learn more abt it (2.21.00)
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";

 
 const Body = () => {
 
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurant, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState(""); 
 
   useEffect(()=> {
      //API call here (1.38.00)
      getRestaurant();
   },[]);
   
   async function getRestaurant () {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.686184&lng=74.221784&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // console.log(json);
     setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);          // option chaining(?) (1.55.00)
     setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
  }
const isOnline = useOnline();
  if(!isOnline) {
    return <h1>offline check your interner connection</h1>;
  }

  
  
  if(!allrestaurants) return null;

   return allrestaurants?.length === 0 ? (
  <Shimmer/> ) : (
  <>
    
    {/* 
       !allrestaurants.length ? <Shimmer/> : <div className='restaurant-list'></div> //We first check if allrestaurants is empty and show the shimmer effect if it is. 
      */}

    <div className="search-container p-5 bg- bg-pink-50 m-4">
      <input type="text" 
      className="focus:bg-green-400 p-2 m-2 " 
      placeholder="search here" 
      value={SearchText}
      onChange = {(e) =>{  //from this e property we can read whatever we are typing in searchbar.
      setSearchText(e.target.value);   //e.target.value :- whatever u write input (js fn 1.16.00) (1.27.50)
        
      }}/>
      <button 
      className="p-2 m-2 bg- bg-purple-900 hover:bg-gray-500 text-white rounded-lg" 
      onClick={() => {
      // need to filter the data :-
      const data = filterData(SearchText, allrestaurants);
      // update the state - restaurant variable
      setFilteredRestaurants(data);
      }
    }
      >search</button> 

    </div>
      <div className="flex flex-wrap bg-gray-600">
      { 
        // Inside the <div className="restaurant-list">, we check if filteredrestaurant is empty. If it is, we display the "No results found !!" message.
        // If filteredrestaurant is not empty, we map over it and render the RestaurantCard components for each restaurant as before.
        
          filteredrestaurant.length === 0 ? (
          <h1>No results found !!</h1>
        ) : (
          filteredrestaurant.map((restaurant) => 
          (
           <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}> 
            <RestrauntCard {...restaurant?.info} key={restaurant?.info?.id}/>
            </Link>
          )
          ))}
      </div>
  </>
  );
};

export default Body;
