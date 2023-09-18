import  { RestrauntList }  from "./config";
import  RestrauntCard  from "./RestaurantCard";
import { useState } from "react"; //1.07.11 hooks
  //1.09
  //what is hooks
  //what is state
  //what is useState() it is most popular and imp hook.
  

  // how below fn works (2.00.11)
  function filterData(searchText, restaurant) {
    const filterData = restaurant.filter((restaurant)=> restaurant.info.name.includes(searchText)
    );
    return filterData;
  }
    




 const Body = () => {
  //  const SearhText = "hellow"; // this how u created in js (1.27.50) & below is how in react
  
  // const [SearchText, setSearchText] = useState("hellow");

  //searchText is a local variable. and below fn is react function(how to create a fn in react)
  const [restaurant, setRestaurants] = useState(RestrauntList);
  const [SearchText, setSearchText] = useState(""); // to create state vairables. it comes from react lib. and this is equivalent to const text = "kingAu".


  return (
  <>
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
        // if (SearchClicked === "true") // (1.48.00)
        // {
        //   setSearchClicked("false");
        // } else 
        // {
        //   setSearchClicked("true");
        // }
        
      // need to filter the data :-
      const data = filterData(SearchText, restaurant);
      // update the state - restaurant variable
      setRestaurants(data);
      }
    }
      >search</button> 

    </div>
      <div className="restaurant-list">
      
      {restaurant?.map((restraurant) => {
        return (
          <RestrauntCard {...restraurant?.info} key={restraurant?.info?.id} />
        );
      })}
      
     </div>
  </>
  );
};

export default Body;
