import React from "react";
import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";
import "./Article.css";

const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
  <ListItem>
    <h5>
      <a href={url} target="_blank">{title}</a>
      
        <button onClick={() => handleClick(_id)} className="btn btn-info">
          {buttonText}
        </button>
     
    </h5>
    <p><i>
      Date {saved ? "Saved" : "Published"}: {formatDate(date)}
    </i></p>
  </ListItem>
);

export default Article;
