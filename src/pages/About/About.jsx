import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

function About({dataAbout}) {
  const imageIndex = 2;

  return (
    <div className="about">
      <Banner imageSrc={`./banner${imageIndex}.jpg`}/>
      <div className="otherInfo">
        {
          dataAbout.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.description}/>
          ))
        }
      </div>
    </div>
  );
}

export default About;
