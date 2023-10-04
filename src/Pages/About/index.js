import React from "react";
import aboutimg from "../../assets/img/unsplash_6anudmpILw4.png";
import "./About.scss";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="first-img">
          <img src={aboutimg} alt="aboutimg"/>
        </div>
        <div className="second-img">
          <h2>About us</h2>
          <p>
            For more than 30 years we have been delivering world-class
            construction and weve built many lasting relationships along the
            way.
            <br />
            <br />
            Weve matured into an industry leader and trusted resource for
            those seeking quality, innovation and reliability when building in
            the U.S.
          </p>
          <button>
          More on Our History
          </button>
        </div>
      </div>
    </>
  )
}

export default About 
