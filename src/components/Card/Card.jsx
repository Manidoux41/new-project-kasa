import React from "react";
import { Link } from "react-router-dom";

function Card({ appartTitle, appartCover }) {

  
  return (
    <Link className="card">
      <div className="cardImg">
        <img src={appartCover} alt={appartTitle} />
      </div>
      <h4>{appartTitle}</h4>
    </Link>
  );
}

export default Card;
