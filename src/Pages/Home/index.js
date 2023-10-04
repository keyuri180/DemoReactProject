import React from "react";
import homeimg from "../../img/Hero.png";
import "./Home.scss";
import Reputation from "../../component/OurReputation/index";
import Project from "../../component/Project/index"
import Service from "../../component/Service/index";
const Home = () => {
  return (
    <>
      <div className="home-containers">
        <div className="home-img">
          <img src={homeimg} alt="Home" className="home-image" />
        </div>
        <div className="home-container">
          <Reputation />
        </div>

        <div className="home-container">
          <Service />
        </div>
        <div className="home-container">
          <Project />
        </div>
      </div>
    </>
  );
};

export default Home;
