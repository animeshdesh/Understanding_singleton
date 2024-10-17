import { GameFactory } from "./factory";
import { gameLogger } from "./logger";
import { GameManager } from "./store";

gameLogger();

// const games = new GameManager();

setInterval(() => {
  GameManager.getInstance()?.addgame("Alice", "Bob", []);
  GameManager.getInstance()?.addMove(0, "X");
  GameFactory.createGame("chess", 1, "Alice", "Bob", ["e4", "e5"]);
  GameFactory.createGame("tic-tac-toe", 2, "Alice", "Bob", ["X", "O"]);
}, 5000);
