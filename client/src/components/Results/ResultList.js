import React from "react";
import './Results.css';

const ResultList = props => (
  <div className="searchResults">
    <table>
      <th>Date</th>
      <th>Headline <i>(Click to view)</i></th>
      <th></th>
      {props.headline} 
   </table>
  </div>
);

export default ResultList;
