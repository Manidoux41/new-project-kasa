import React from "react";
import { Link } from "react-router-dom";

function Card({appartId, appartTitle, appartCover }) {

  
  return (
    <Link className="card" to={'../lodging/'+ appartId } >
      <div className="cardImg">
        <img src={appartCover} alt={appartTitle} />
      </div>
      <h4>{appartTitle}</h4>
    </Link>
  );
}

export default Card;
