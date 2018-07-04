import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card mt-4">
    <div className="card-header bg-info text-center">
      <h5 id="containerTitle">
     
          {props.title}
  
      </h5>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
);

export default Card;
