export interface Game {
  id: number;
  player1: string;
  player2: string;
  moves: string[];
}

//singleton
export class GameManager {
  private static instance: GameManager;
  private games: Game[] = [];

  static getInstance() {
    if (GameManager.instance) {
      return GameManager.instance;
    }
    GameManager.instance = new GameManager();
  }
  addMove(gameId: number, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      game.moves.push(move);
    }
  }

  addgame(player1: string, player2: string, moves: string[]) {
    this.games.push({
      id: this.games.length,
      player1,
      player2,
      moves,
    });
  }
  logGames() {
    console.log(this.games);
  }
}

export const games = new GameManager();
