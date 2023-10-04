import React from 'react'
import { servicesData } from "../../constants";
import ServicesContainer from "./ServiceContainer";
const Service = () => {
  return (
    <div className="servicesBox">
    <h1 className="servicesname">Services</h1>
    <div className="services-grid-box">
      {servicesData.length > 0 &&
        servicesData.map((item, i) => <ServicesContainer data={item} />)}
    </div>
  </div>
  )
}

export default Service
