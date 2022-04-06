import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import "./BoardContent.scss";
import Column from "../Column/Column";
import { mapOrder } from "../../utilities/sorts";

import { initialData } from "../../actions/initialData";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  // not infinite
  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);

      setColumns(boardFromDB.columns);
    }
  }, []);

  if (isEmpty(board)) {
    return <div className="not-found">Board not Found!</div>;
  }

  return (
    <div className="board-content">
      <Column />
    </div>
  );
}
export default BoardContent;
