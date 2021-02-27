// Chess pieces graphics by jurgenwesterhof (adapted from work of Cburnett)
// More information at https://commons.wikimedia.org/wiki/Template:SVG_chess_pieces
// License: CC BY-SA 3.0 https://creativecommons.org/licenses/by-sa/3.0/

import blackBishop from "./images/black-bishop.png";
import blackKing from "./images/black-king.png";
import blackKnight from "./images/black-knight.png";
import blackPawn from "./images/black-pawn.png";
import blackQueen from "./images/black-queen.png";
import blackRook from "./images/black-rook.png";

import whiteBishop from "./images/white-bishop.png";
import whiteKing from "./images/white-king.png";
import whiteKnight from "./images/white-knight.png";
import whitePawn from "./images/white-pawn.png";
import whiteQueen from "./images/white-queen.png";
import whiteRook from "./images/white-rook.png";

export enum Pieces {
  EMPTY,
  BLACK_ROOK,
  BLACK_KNIGHT,
  BLACK_BISHOP,
  BLACK_QUEEN,
  BLACK_KING,
  BLACK_PAWN,
  WHITE_ROOK,
  WHITE_KNIGHT,
  WHITE_BISHOP,
  WHITE_QUEEN,
  WHITE_KING,
  WHITE_PAWN,
}

export const PieceToImage: { [key in Pieces]: string | null } = {
  [Pieces.EMPTY]: null,

  [Pieces.BLACK_BISHOP]: blackBishop,
  [Pieces.BLACK_KING]: blackKing,
  [Pieces.BLACK_KNIGHT]: blackKnight,
  [Pieces.BLACK_PAWN]: blackPawn,
  [Pieces.BLACK_QUEEN]: blackQueen,
  [Pieces.BLACK_ROOK]: blackRook,

  [Pieces.WHITE_BISHOP]: whiteBishop,
  [Pieces.WHITE_KING]: whiteKing,
  [Pieces.WHITE_KNIGHT]: whiteKnight,
  [Pieces.WHITE_PAWN]: whitePawn,
  [Pieces.WHITE_QUEEN]: whiteQueen,
  [Pieces.WHITE_ROOK]: whiteRook,
};
