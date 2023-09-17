import { IMG } from "./config"
import React from "react";


const RestrauntCard = ({name,cuisines,cloudinaryImageId,areaName,locality}) => {
  
    return (
    <div className="card">
        <img src={IMG + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h2>{areaName}</h2>
        <h4>{locality}</h4> 
    </div>
    );
  };

export default RestrauntCard;