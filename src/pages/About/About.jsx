import React from "react";
import Banner from "../../components/Banner/Banner";

function About() {
  const imageIndex = 2;

  return (
    <div className="about">
      <Banner imageSrc={`./banner${imageIndex}.jpg`}/>
    </div>
  );
}

export default About;
