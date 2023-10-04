import React from "react";
import {homeData} from "../../homeconstants";
import HomeData from "./HomeData";
const Reputation = () => {


  return (
    <div className="servicesBox" style={{padding:"100px"}}>
      <h2 className="servicesname" style={{padding:"30px"}}>Our Reputation</h2>
      <div className="services-grid-box">
        {homeData?.length > 0 &&
          homeData?.map((item, i) => 
          <HomeData data={item}/>
          )}
      </div>
    </div>
  );
};

export default Reputation;
