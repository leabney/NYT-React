import React from "react";
import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";

const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
  <ListItem>
    <h5>
      <a href={url} target="_blank">{title}</a>
      
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {buttonText}
        </button>
     
    </h5>
    <p>
      Date {saved ? "Saved" : "Published"}: {formatDate(date)}
    </p>
  </ListItem>
);

export default Article;
