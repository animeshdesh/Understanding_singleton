import { GameManager } from "./store";
import { startLooger } from "./logger";

startLooger();

setInterval(() => {
  GameManager.getInstance().addGame(Date.now().toString());
}, 5000);
