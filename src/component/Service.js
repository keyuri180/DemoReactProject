import React from "react";
import "../Style/Services.scss";
const Service = (props) => {
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

export default Service;
