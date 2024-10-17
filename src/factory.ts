import { Game } from "./store";

class ChessGame implements Game {
  id: number;
  player1: string;
  player2: string;
  moves: string[];

  constructor(id: number, player1: string, player2: string, moves: string[]) {
    this.id = id;
    this.player1 = player1;
    this.player2 = player2;
    this.moves = moves;
  }
}

class TicTacToeGame implements Game {
  id: number;
  player1: string;
  player2: string;
  moves: string[];

  constructor(id: number, player1: string, player2: string, moves: string[]) {
    this.id = id;
    this.player1 = player1;
    this.player2 = player2;
    this.moves = moves;
  }
}

//factory pattern
export class GameFactory {
  static createGame(
    type: string,
    id: number,
    player1: string,
    player2: string,
    moves: string[]
  ) {
    if (type === "chess") {
      console.log("chess game created");
      return new ChessGame(id, player1, player2, moves);
    } else if (type === "tic-tac-toe") {
      console.log("tic-tac-toe game created");
      return new TicTacToeGame(id, player1, player2, moves);
    } else {
      throw new Error("Invalid game type");
    }
  }
}
