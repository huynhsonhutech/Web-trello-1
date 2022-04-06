import React from "react";

import "./Column.scss";
import Card from "../Card/Card";

function Column(props) {
  const { column } = props;

  return (
    <div className="column">
      <header> {column.tittle} </header>
      <ul className="card-list">
        <Card />
        <li className="card-item">
          This list has the List Limits Power-up enabled.
        </li>
        <li className="card-item">
          This list has the List Limits Power-up enabled.
        </li>
        <li className="card-item">
          This list has the List Limits Power-up enabled.
        </li>
        <li className="card-item">
          This list has the List Limits Power-up enabled.
        </li>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
}
export default Column;
