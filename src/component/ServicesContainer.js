import React from "react";
import { servicesData } from "../constants";
import Service from "./Service";
import "../Style/Services.scss";
function ServicesContainer() {
  return (
    <div className="servicesBox">
      <h1 className="servicesname">Services</h1>
      <div className="services-grid-box">
        {servicesData.length > 0 &&
          servicesData.map((item, i) => <Service data={item} />)}
      </div>
    </div>
  );
}

export default ServicesContainer;
