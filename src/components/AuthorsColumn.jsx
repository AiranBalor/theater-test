import React from "react";
import "./AuthorsColumn.css";

function AuthorsColumn({ sortedAuthors }) {

  return (
    <div className="authors">
      { sortedAuthors? sortedAuthors.map((array, index) => {
        return (
          <div key={index} className="authors__item">
            <p className="authors__first-symbol">{array[0][0][0]}</p>
            <ul className="authors__list">
              {array.map((author, index) => {
                return (
                  <li key={index} className="authors__list-item">
                    {author}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }) : ""}
    </div>
  );
}

export default AuthorsColumn;
