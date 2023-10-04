import React from "react";
import "./Services.scss";
const ServicesContainer = (props) => {
  const { data } = props;
  console.log("first", props);
  return (
      <div
        className={`box ${
          data?.backgroudcolortype === "light"
            ? "lightbackgroud"
            : "darkbackgroud"
        }` }
   >
        <img src={data?.image} alt="serviceimg" />
        <hr />
        <h1>{data?.name}</h1>
      </div>
  );
};

export default ServicesContainer;
