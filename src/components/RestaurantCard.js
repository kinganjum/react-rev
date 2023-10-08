import { IMG } from "./config"
import React from "react";


const RestrauntCard = ({name,cuisines,cloudinaryImageId,areaName,locality}) => {
  
    return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg- bg-green-200">
        <img src={IMG + cloudinaryImageId}/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h2>{areaName}</h2>
        <h4>{locality}</h4> 
    </div>
    );
  };

export default RestrauntCard;