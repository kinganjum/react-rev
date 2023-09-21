import  { RestrauntList }  from "./config";
import  RestrauntCard  from "./RestaurantCard";
import { useState, useEffect } from "react"; //1.07.11 hooks
import Shimmer from "./shimmer.js";  //shimmer Ui learn more abt it (2.21.00)
  //1.09
  //what is hooks
  //what is state
  //what is useState() it is most popular and imp hook.
  

  // how below fn works (2.00.11)
  function filterData(searchText, restaurant) {
    const filterData = restaurant.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())  // here we used toLowerCase to match the search input even if user search in upper or lower case.(2.44.29)
    );
    return filterData;
  }
    




 const Body = () => {
  //  const SearhText = "hellow"; // this how u created in js (1.27.50) & below is how in react
  
  // const [SearchText, setSearchText] = useState("hellow");

  //searchText is a local variable. and below fn is react function(how to create a fn in react)
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurant, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState(""); // to create state vairables. it comes from react lib. and this is equivalent to const text = "kingAu".

  //empty dependency array [] => once after render
  // dependency array [searchText]=> once after initialize render + everytime after rerender
   useEffect(()=> {
      //API call here (1.38.00)
      getRestaurant();
   },[]);
   
   async function getRestaurant () {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.686184&lng=74.221784&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
     setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);          // option chaining(?) (1.55.00)
     setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
  }
   console.log("render");

   // conditional rendering :- (2.17.00)
   // if restaurant is empty => shimmer UI
   // if restaurant has data => actual data UI

  //  if(filteredrestaurant?.length == 0) return <h1>No results found !!</h1>;

   return ( // allrestaurants.length == 0 ) ? <Shimmer/> : (
  <>
    
    {
      !allrestaurants.length ? <Shimmer/> : <div className='restaurant-list'></div>   // shimmer effect.
    }

    <div className="search-container">
      <input type="text" 
      className="search-input" 
      placeholder="search here" 
      value={SearchText}
      onChange = {(e) =>{  //from this e property we can read whatever we are typing in searchbar.
      setSearchText(e.target.value);   //e.target.value :- whatever u write input (js fn 1.16.00) (1.27.50)
        
      }}/>
      <button 
      className="search-btn" 
      onClick={() => {
      // need to filter the data :-
      const data = filterData(SearchText, allrestaurants);
      // update the state - restaurant variable
      setFilteredRestaurants(data);
      }
    }
      >search</button> 

    </div>
      <div className="restaurant-list">
      { //We first check if allrestaurants is empty and show the shimmer effect if it is.
        // Inside the <div className="restaurant-list">, we check if filteredrestaurant is empty. If it is, we display the "No results found !!" message.
        // If filteredrestaurant is not empty, we map over it and render the RestaurantCard components for each restaurant as before.
        filteredrestaurant.length === 0 ? (
          <h1>No results found !!</h1>
        ) : (
          filteredrestaurant.map((restaurant) => (
            <RestrauntCard {...restaurant?.info} key={restaurant?.info?.id} />
          ))
        )
      }
     </div>
  </>
  );
};

export default Body;
