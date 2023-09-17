import  { RestrauntList }  from "./config";
import  RestrauntCard  from "./RestaurantCard";

 const Body = () => {
  return (
    <div className="restaurant-list">
      
      {RestrauntList?.map((restraurant) => {
        return (
          <RestrauntCard {...restraurant?.info} key={restraurant?.info?.id} />
        );
      })}
      
    </div>
  );
};

export default Body;
