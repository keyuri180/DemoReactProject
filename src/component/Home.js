import React from "react";
import homeimg from "../img/Hero.png";

import Projects from "../component/Projects";

import "../Style/Home.scss";
import Second from "./Second";
import ServicesContainer from "./ServicesContainer";
const Home = () => {
  return (
    <>
      <div className="home-containers">
        <div className="home-img">
          <img src={homeimg} alt="Home" className="home-image" />
        </div>
        <div className="home-container">
          <Second />
        </div>

        <div className="home-container">
          <ServicesContainer />
        </div>
        <div className="home-container">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Home;
