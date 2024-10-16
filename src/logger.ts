import { GameManager } from "./store";

export function startLooger() {
  setInterval(() => {
    console.log(GameManager.getInstance().log());
  }, 5000);
}
