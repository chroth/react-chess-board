import React from "react";
import "./App.css";
import { Pieces, PieceToImage } from "./chess-pieces";

const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ROWS = [8, 7, 6, 5, 4, 3, 2, 1];

const Square: React.FC<{
  column: string;
  row: number;
  imageData: string | null;
}> = ({ column, row, imageData }) => {
  const isDark = (COLUMNS.indexOf(column) + ROWS.indexOf(row)) % 2;
  return (
    <div className={"square " + (isDark ? " dark" : " light")}>
      {imageData && <img className="piece" src={imageData} />}
    </div>
  );
};

const INITIAL_BOARD = [
  [
    Pieces.BLACK_ROOK,
    Pieces.BLACK_KNIGHT,
    Pieces.BLACK_BISHOP,
    Pieces.BLACK_QUEEN,
    Pieces.BLACK_KING,
    Pieces.BLACK_BISHOP,
    Pieces.BLACK_KNIGHT,
    Pieces.BLACK_ROOK,
  ],
  [
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
    Pieces.BLACK_PAWN,
  ],
  [
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
  ],
  [
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
  ],
  [
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
  ],
  [
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
    Pieces.EMPTY,
  ],
  [
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
    Pieces.WHITE_PAWN,
  ],
  [
    Pieces.WHITE_ROOK,
    Pieces.WHITE_KNIGHT,
    Pieces.WHITE_BISHOP,
    Pieces.WHITE_QUEEN,
    Pieces.WHITE_KING,
    Pieces.WHITE_BISHOP,
    Pieces.WHITE_KNIGHT,
    Pieces.WHITE_ROOK,
  ],
];

function App() {
  const [board, setBoard] = React.useState(INITIAL_BOARD);

  return (
    <div className="board">
      {ROWS.map((row, rowIndex) => (
        <div className="row" key={row}>
          <div className="rowDesc">{row}</div>
          {COLUMNS.map((column, columnIndex) => (
            <Square
              key={`${column}${row}`}
              column={column}
              row={row}
              imageData={PieceToImage[board[rowIndex][columnIndex]]}
            />
          ))}
        </div>
      ))}
      <div className="row">
        <div className="rowDesc"></div>
        {COLUMNS.map((column) => (
          <div className="colDesc">{column}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
