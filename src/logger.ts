import { GameManager } from "./store";

// const games = new GameManager();

export const gameLogger = () => {
  setInterval(() => {
    GameManager.getInstance()?.logGames();
  }, 5000);
};
